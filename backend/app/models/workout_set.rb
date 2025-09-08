class WorkoutSet < ApplicationRecord
  # Validations
  validates :date, presence: true

  validates :reps, numericality: { only_integer: true, greater_than: 0, allow_nil: true }
  validates :weight_mcg, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_nil: true }
  validates :distance_mm, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_nil: true }
  validates :duration_ms, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_nil: true }
  validates :speed_kph, numericality: { greater_than_or_equal_to: 0, allow_nil: true }
  validates :rest_ms, numericality: { only_integer: true, greater_than_or_equal_to: 0, allow_nil: true }

  # Relationships
  belongs_to :workout_step
  belongs_to :exercise
end
