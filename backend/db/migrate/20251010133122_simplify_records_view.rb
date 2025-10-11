class SimplifyRecordsView < ActiveRecord::Migration[8.0]
  def up
    execute "DROP VIEW IF EXISTS exercise_records;"

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
          END AS measurement_value,
          CASE
            WHEN is_metric_match('{weight}', emt.measurement_types)
              THEN 'weight'
            WHEN is_metric_match('{duration}', emt.measurement_types)
              THEN 'duration'
            WHEN is_metric_match('{reps}', emt.measurement_types)
              THEN 'reps'
            WHEN is_metric_match('{distance}', emt.measurement_types)
              THEN 'distance'
            WHEN is_metric_match('{weight,duration}', emt.measurement_types)
              THEN 'duration'
            WHEN is_metric_match('{reps,weight}', emt.measurement_types)
              THEN 'weight'
            WHEN is_metric_match('{duration,reps}', emt.measurement_types)
              THEN 'reps'
            WHEN is_metric_match('{weight,distance}', emt.measurement_types)
              THEN 'distance'
            WHEN is_metric_match('{distance,duration}', emt.measurement_types)
              THEN 'duration'
            WHEN is_metric_match('{reps,distance}', emt.measurement_types)
              THEN 'distance'
            ELSE NULL
          END AS measuring_metric_type
        FROM workout_sets ws
        INNER JOIN exercise_measurement_types emt ON ws.exercise_id = emt.exercise_id
        WHERE ws.is_warmup = false
      ),
      ranked_sets AS (
        SELECT
          ms.*,
          em.more_is_better,
          ROW_NUMBER() OVER (
            PARTITION BY ms.exercise_id, ms.grouping_value
            ORDER BY
              CASE
                WHEN em.more_is_better THEN ms.measurement_value
                ELSE -ms.measurement_value
              END DESC,
              ms.date DESC
          ) AS rank
        FROM measurement_sets ms
        LEFT JOIN exercise_measurements em ON ms.exercise_id = em.exercise_id
          AND ms.measuring_metric_type = em.measurement_type
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
end
