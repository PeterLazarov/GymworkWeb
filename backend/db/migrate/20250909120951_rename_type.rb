class RenameType < ActiveRecord::Migration[8.0]
  def change
    rename_column :workout_steps, :type, :step_type
  end
end
