class WorkoutStep < ApplicationRecord
  belongs_to :workout
  has_many :sets, dependent: :destroy, class_name: :WorkoutSet
  has_many :workout_step_exercises, dependent: :destroy
  has_many :exercises, through: :workout_step_exercises
end
