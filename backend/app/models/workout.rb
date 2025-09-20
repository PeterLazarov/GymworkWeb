class Workout < ApplicationRecord
  # Validations
  validates :date, presence: true
  # Relationships
  has_many :steps, dependent: :destroy, class_name: :WorkoutStep
  has_many :sets, through: :steps
end
