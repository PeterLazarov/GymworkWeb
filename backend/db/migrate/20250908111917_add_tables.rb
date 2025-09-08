# frozen_string_literal: true

class AddTables < ActiveRecord::Migration[7.1]
  def change
    create_table :exercises, id: :uuid do |t|
      t.string :name, null: false
      t.string :images, array: true, default: []
      t.string :equipment, array: true, default: []
      t.string :position
      t.string :stance
      t.string :instructions, array: true, default: []
      t.string :tips, array: true
      t.string :muscle_areas, array: true, default: []
      t.string :muscles, array: true, default: []
      t.jsonb :measurements, default: {
        duration: nil,
        reps: nil,
        weight: nil,
        distance: nil,
        speed: nil
      }
      t.boolean :is_favorite, default: false, null: false

      t.timestamps
    end

    create_table :workouts, id: :uuid do |t|
      t.date :date, null: false
      t.text :notes
      t.string :feeling
      t.string :pain
      t.integer :rpe
      t.datetime :ended_at
      t.integer :duration_ms

      t.timestamps
    end

    create_table :workout_steps, id: :uuid do |t|
      t.references :workout, type: :uuid, null: false, foreign_key: true
      t.string :type, null: false

      t.timestamps
    end

    create_table :workout_step_exercises, id: :uuid do |t|
      t.references :workout_step, type: :uuid, null: false, foreign_key: true
      t.references :exercise, type: :uuid, null: false, foreign_key: true

      t.timestamps
    end

    create_table :workout_sets, id: :uuid do |t|
      t.references :workout_step, type: :uuid, null: false, foreign_key: true
      t.references :exercise, type: :uuid, null: false, foreign_key: true
      t.boolean :is_warmup, default: false, null: false
      t.date :date, null: false
      t.boolean :is_weak_ass_record, default: false, null: false
      t.integer :reps
      t.bigint :weight_mcg # Using bigint for micrograms to handle large numbers
      t.integer :distance_mm
      t.integer :duration_ms
      t.decimal :speed_kph, precision: 10, scale: 2
      t.integer :rest_ms
      t.datetime :completed_at

      t.timestamps
    end

    add_index :exercises, :name
    add_index :workouts, :date
    add_index :workout_sets, :date
    add_index :workout_sets, :is_weak_ass_record
  end
end
