class ExerciseMeasurement < ApplicationRecord
  belongs_to :exercise

  validates :measurement_type, presence: true, inclusion: { in: %w[reps weight distance duration speed rest] }
  validates :unit, presence: true
  validates :more_is_better, inclusion: { in: [true, false] }
  validates :step_value, numericality: { greater_than: 0 }, allow_nil: true

  class << self
    def find_by_type(type)
      find_by(measurement_type: type)
    end
  end
end
