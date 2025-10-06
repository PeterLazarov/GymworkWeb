class AddWorkoutTemplates < ActiveRecord::Migration[7.1]
  def up
    add_column :workouts, :is_template, :boolean, default: false, null: false
    add_column :workouts, :name, :string, null: true
    change_column_null :workouts, :date, true
  end

  def down
    remove_column :workouts, :is_template
    remove_column :workouts, :name
  end
end
