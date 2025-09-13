class CreateExerciseRecordsView < ActiveRecord::Migration[8.0]
  def up
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

  def down
    execute "DROP VIEW IF EXISTS exercise_records;"
  end
end
