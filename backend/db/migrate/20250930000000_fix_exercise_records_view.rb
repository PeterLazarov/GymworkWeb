class FixExerciseRecordsView < ActiveRecord::Migration[8.0]
  def up
    execute "DROP VIEW IF EXISTS exercise_records;"

    execute <<-SQL
      CREATE OR REPLACE FUNCTION is_metric_match(
        target_metrics text[],
        measurement_types text[]
      ) RETURNS boolean AS $$
      BEGIN
        RETURN target_metrics <@ measurement_types
           AND measurement_types <@ target_metrics
           AND array_length(target_metrics, 1) = array_length(measurement_types, 1);
      END;
      $$ LANGUAGE plpgsql IMMUTABLE;
    SQL

    execute <<-SQL
      CREATE VIEW exercise_records AS
      WITH exercise_measurement_types AS (
        SELECT
          exercise_id,
          array_agg(measurement_type) as measurement_types
        FROM exercise_measurements
        GROUP BY exercise_id
      ),
      measurement_sets AS (
        SELECT
          ws.id,
          ws.exercise_id,
          ws.reps,
          ws.weight_mcg,
          ws.distance_mm,
          ws.duration_ms,
          ws.speed_kph,
          ws.date,
          emt.measurement_types,
          CASE
            WHEN is_metric_match('{weight}', emt.measurement_types)
              THEN ws.weight_mcg
            WHEN is_metric_match('{duration}', emt.measurement_types)
              THEN ws.duration_ms
            WHEN is_metric_match('{reps}', emt.measurement_types)
              THEN ws.reps
            WHEN is_metric_match('{distance}', emt.measurement_types)
              THEN ws.distance_mm
            WHEN is_metric_match('{weight,duration}', emt.measurement_types)
              THEN ws.weight_mcg
            WHEN is_metric_match('{reps,weight}', emt.measurement_types)
              THEN ws.reps
            WHEN is_metric_match('{duration,reps}', emt.measurement_types)
              THEN ws.duration_ms
            WHEN is_metric_match('{weight,distance}', emt.measurement_types)
              THEN ws.weight_mcg
            WHEN is_metric_match('{distance,duration}', emt.measurement_types)
              THEN ws.distance_mm
            WHEN is_metric_match('{reps,distance}', emt.measurement_types)
              THEN ws.reps
            ELSE NULL
          END AS grouping_value,
          CASE
            WHEN is_metric_match('{weight}', emt.measurement_types)
              THEN ws.weight_mcg
            WHEN is_metric_match('{duration}', emt.measurement_types)
              THEN -ws.duration_ms
            WHEN is_metric_match('{reps}', emt.measurement_types)
              THEN ws.reps
            WHEN is_metric_match('{distance}', emt.measurement_types)
              THEN ws.distance_mm
            WHEN is_metric_match('{weight,duration}', emt.measurement_types)
              THEN -ws.duration_ms
            WHEN is_metric_match('{reps,weight}', emt.measurement_types)
              THEN ws.weight_mcg
            WHEN is_metric_match('{duration,reps}', emt.measurement_types)
              THEN ws.reps
            WHEN is_metric_match('{weight,distance}', emt.measurement_types)
              THEN ws.distance_mm
            WHEN is_metric_match('{distance,duration}', emt.measurement_types)
              THEN -ws.duration_ms
            WHEN is_metric_match('{reps,distance}', emt.measurement_types)
              THEN ws.distance_mm
            ELSE NULL
          END AS measurement_value
        FROM workout_sets ws
        INNER JOIN exercise_measurement_types emt ON ws.exercise_id = emt.exercise_id
        WHERE ws.is_warmup = false
      ),
      measurement_sets_with_direction AS (
        SELECT
          ms.*,
          CASE
          WHEN is_metric_match('{weight}', ms.measurement_types)
            THEN 'weight'
          WHEN is_metric_match('{duration}', ms.measurement_types)
            THEN 'duration'
          WHEN is_metric_match('{reps}', ms.measurement_types)
            THEN 'reps'
          WHEN is_metric_match('{distance}', ms.measurement_types)
            THEN 'distance'
          WHEN is_metric_match('{weight,duration}', ms.measurement_types)
            THEN 'duration'
          WHEN is_metric_match('{reps,weight}', ms.measurement_types)
            THEN 'weight'
          WHEN is_metric_match('{duration,reps}', ms.measurement_types)
            THEN 'reps'
          WHEN is_metric_match('{weight,distance}', ms.measurement_types)
            THEN 'distance'
          WHEN is_metric_match('{distance,duration}', ms.measurement_types)
            THEN 'duration'
          WHEN is_metric_match('{reps,distance}', ms.measurement_types)
            THEN 'distance'
          ELSE NULL
        END AS measuring_metric_type
        FROM measurement_sets ms
        WHERE ms.grouping_value IS NOT NULL
      ),
      ranked_sets AS (
        SELECT
          mswd.*,
          em.more_is_better,
          ROW_NUMBER() OVER (
            PARTITION BY mswd.exercise_id, mswd.grouping_value
            ORDER BY
              CASE
                WHEN em.more_is_better THEN mswd.measurement_value
                ELSE -mswd.measurement_value
              END DESC,
              mswd.date DESC
          ) AS rank
        FROM measurement_sets_with_direction mswd
        LEFT JOIN exercise_measurements em ON mswd.exercise_id = em.exercise_id
          AND mswd.measuring_metric_type = em.measurement_type
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
    execute "DROP FUNCTION IF EXISTS is_metric_match;"

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
            WHEN workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.duration_ms
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.duration_ms
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL THEN workout_sets.distance_mm
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.reps
            ELSE NULL
          END AS grouping_value,
          CASE
            WHEN workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN -workout_sets.duration_ms
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            WHEN workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.distance_mm IS NULL THEN -workout_sets.duration_ms
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.duration_ms IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.weight_mcg
            WHEN workout_sets.reps IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.distance_mm IS NULL THEN workout_sets.reps
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.weight_mcg IS NOT NULL AND workout_sets.reps IS NULL AND workout_sets.duration_ms IS NULL THEN workout_sets.distance_mm
            WHEN workout_sets.distance_mm IS NOT NULL AND workout_sets.duration_ms IS NOT NULL AND workout_sets.weight_mcg IS NULL AND workout_sets.reps IS NULL THEN -workout_sets.duration_ms
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
end
