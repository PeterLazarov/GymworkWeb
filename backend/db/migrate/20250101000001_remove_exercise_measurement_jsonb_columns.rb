class RemoveExerciseMeasurementJsonbColumns < ActiveRecord::Migration[7.1]
  def up
    remove_column :exercises, :reps_measurement
    remove_column :exercises, :weight_measurement
    remove_column :exercises, :distance_measurement
    remove_column :exercises, :duration_measurement
    remove_column :exercises, :speed_measurement
    remove_column :exercises, :rest_measurement
  end

  def down
    add_column :exercises, :reps_measurement, :jsonb
    add_column :exercises, :weight_measurement, :jsonb
    add_column :exercises, :distance_measurement, :jsonb
    add_column :exercises, :duration_measurement, :jsonb
    add_column :exercises, :speed_measurement, :jsonb
    add_column :exercises, :rest_measurement, :jsonb
  end
end
