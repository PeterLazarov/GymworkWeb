# frozen_string_literal: true

class CreateSettings < ActiveRecord::Migration[7.1]
  def change
    create_table :settings, id: :uuid do |t|
      t.string :theme, null: false, default: 'light'
      t.boolean :scientific_muscle_names_enabled, null: false, default: false
      t.boolean :show_set_completion, null: false, default: true
      t.boolean :preview_next_set, null: false, default: true
      t.boolean :measure_rest, null: false, default: true
      t.boolean :show_comments_card, null: false, default: true
      t.boolean :show_workout_timer, null: false, default: true
    end
  end
end
