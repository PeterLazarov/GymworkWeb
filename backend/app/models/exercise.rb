class Exercise < ApplicationRecord
  validates :name, presence: true

  has_many :workout_step_exercises
  has_many :workout_steps, through: :workout_step_exercises
  has_many :workout_sets
end
