class Exercise < ApplicationRecord
  validates :name, presence: true

  has_many :workout_step_exercises
  has_many :workout_steps, through: :workout_step_exercises
  has_many :workout_sets
  has_many :exercise_measurements, dependent: :destroy

  accepts_nested_attributes_for :exercise_measurements, allow_destroy: true
end
