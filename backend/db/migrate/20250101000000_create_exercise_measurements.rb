class CreateExerciseMeasurements < ActiveRecord::Migration[7.1]
  def up
    create_table :exercise_measurements, id: :uuid do |t|
      t.references :exercise, type: :uuid, null: false, foreign_key: true
      t.string :measurement_type, null: false
      t.string :unit, null: false
      t.boolean :more_is_better, null: false, default: true
      t.decimal :step_value, precision: 10, scale: 3
      t.timestamps
    end

    add_index :exercise_measurements, [:exercise_id, :measurement_type], unique: true, name: 'index_exercise_measurements_on_exercise_and_type'
    add_index :exercise_measurements, :measurement_type

    migrate_existing_measurements
  end

  def down
    drop_table :exercise_measurements
  end

  private

  def migrate_existing_measurements
    Exercise.find_each do |exercise|
      if exercise.reps_measurement.present?
        create_measurement(exercise, 'reps', exercise.reps_measurement)
      end

      if exercise.weight_measurement.present?
        create_measurement(exercise, 'weight', exercise.weight_measurement)
      end

      if exercise.distance_measurement.present?
        create_measurement(exercise, 'distance', exercise.distance_measurement)
      end

      if exercise.duration_measurement.present?
        create_measurement(exercise, 'duration', exercise.duration_measurement)
      end

      if exercise.speed_measurement.present?
        create_measurement(exercise, 'speed', exercise.speed_measurement)
      end

      if exercise.rest_measurement.present?
        create_measurement(exercise, 'rest', exercise.rest_measurement)
      end
    end
  end

  def create_measurement(exercise, measurement_type, measurement_data)
    ExerciseMeasurement.create!(
      exercise: exercise,
      measurement_type: measurement_type,
      unit: measurement_data['unit'],
      more_is_better: measurement_data['more_is_better'],
      step_value: measurement_data['step'],
    )
  end
end
