# frozen_string_literal: true

class CreateMuscleAreaStatsView < ActiveRecord::Migration[7.0]
  def up
    execute <<-SQL
      CREATE OR REPLACE VIEW muscle_area_stats AS
      WITH workout_muscle_areas AS (
        -- Get unique muscle areas per workout
        SELECT DISTINCT
          w.id as workout_id,
          unnest(e.muscle_areas) as muscle_area
        FROM workouts w
        JOIN workout_steps ws ON ws.workout_id = w.id
        JOIN workout_step_exercises wse ON wse.workout_step_id = ws.id
        JOIN exercises e ON e.id = wse.exercise_id
      ),
      total_workouts AS (
        SELECT COUNT(*) as count FROM workouts
      )
      SELECT
        wma.muscle_area,
        COUNT(DISTINCT wma.workout_id) as workout_count,
        ROUND(CAST(COUNT(DISTINCT wma.workout_id) AS NUMERIC) / CAST(tw.count AS NUMERIC) * 100, 2) as percentage,
        tw.count as total_workouts
      FROM workout_muscle_areas wma
      CROSS JOIN total_workouts tw
      GROUP BY wma.muscle_area, tw.count
      ORDER BY percentage DESC;
    SQL
  end

  def down
    execute "DROP VIEW IF EXISTS muscle_area_stats;"
  end
end
