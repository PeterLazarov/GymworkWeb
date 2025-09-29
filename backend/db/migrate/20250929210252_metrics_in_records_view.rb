class MetricsInRecordsView < ActiveRecord::Migration[8.0]
  def up
    execute "DROP VIEW IF EXISTS exercise_records;"

    execute <<-SQL
      CREATE VIEW exercise_records AS
      WITH measurement_sets AS (
        SELECT
          workout_sets.id,
          workout_sets.exercise_id,
          workout_sets.reps,
          workout_sets.weight_mcg,
          workout_sets.distance_mm,
          workout_sets.duration_ms,
          workout_sets.speed_kph,
          workout_sets.date,
          CASE
            -- Single metrics
            WHEN workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.duration_ms
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            -- Two metrics: duration + weight (groupBy: weight)
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            -- Two metrics: reps + weight (groupBy: reps)
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            -- Two metrics: reps + duration (groupBy: duration)
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.duration_ms
            -- Two metrics: distance + weight (groupBy: weight)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.weight_mcg
            -- Two metrics: distance + duration (groupBy: distance)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL THEN workout_sets.distance_mm
            -- Two metrics: distance + reps (groupBy: reps)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.reps
            ELSE NULL
          END AS grouping_value,
          CASE
            -- Single metrics
            WHEN workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN -workout_sets.duration_ms
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            -- Two metrics: duration + weight (groupBy: weight, measureBy: duration)
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN -workout_sets.duration_ms
            -- Two metrics: reps + weight (groupBy: reps, measureBy: weight)
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            -- Two metrics: reps + duration (groupBy: duration, measureBy: reps)
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            -- Two metrics: distance + weight (groupBy: weight, measureBy: distance)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            -- Two metrics: distance + duration (groupBy: distance, measureBy: duration)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL THEN -workout_sets.duration_ms
            -- Two metrics: distance + reps (groupBy: reps, measureBy: distance)
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            ELSE NULL
          END AS measurement_value
        FROM workout_sets
      ), ranked_sets AS (
        SELECT
          measurement_sets.id,
          measurement_sets.exercise_id,
          measurement_sets.reps,
          measurement_sets.weight_mcg,
          measurement_sets.distance_mm,
          measurement_sets.duration_ms,
          measurement_sets.speed_kph,
          measurement_sets.date,
          measurement_sets.grouping_value,
          measurement_sets.measurement_value,
          ROW_NUMBER() OVER (
            PARTITION BY measurement_sets.exercise_id, measurement_sets.grouping_value
            ORDER BY measurement_sets.measurement_value DESC, measurement_sets.date DESC
          ) AS rank
        FROM measurement_sets
      )
      SELECT
        id AS record_id,
        exercise_id,
        reps,
        weight_mcg,
        distance_mm,
        duration_ms,
        speed_kph,
        date,
        grouping_value,
        measurement_value
      FROM ranked_sets
      WHERE rank = 1
      ORDER BY exercise_id, grouping_value;
    SQL
  end

  def down
    execute "DROP VIEW IF EXISTS exercise_records;"

    execute <<-SQL
      CREATE VIEW exercise_records AS
      WITH ranked_sets AS (
        SELECT
          id,
          exercise_id,
          reps,
          weight_mcg,
          date,
          ROW_NUMBER() OVER (
            PARTITION BY exercise_id, reps
            ORDER BY weight_mcg DESC, date DESC
          ) as rank
        FROM workout_sets
        WHERE
          weight_mcg IS NOT NULL
          AND reps IS NOT NULL
          AND is_warmup = false
      )
      SELECT
        id as record_id,
        exercise_id,
        reps,
        weight_mcg,
        date
      FROM ranked_sets
      WHERE rank = 1
      ORDER BY exercise_id, reps;
    SQL
  end
end
