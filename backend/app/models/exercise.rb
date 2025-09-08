class Exercise < ApplicationRecord
  # Validations
  validates :name, presence: true

  # Relationships
  has_many :workout_step_exercises
  has_many :workout_steps, through: :workout_step_exercises
  has_many :workout_sets
end
