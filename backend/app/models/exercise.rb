class Exercise < ApplicationRecord
  validates :name, presence: true

  has_many :workout_step_exercises
  has_many :workout_steps, through: :workout_step_exercises
  has_many :workout_sets
  has_many :exercise_measurements, dependent: :destroy

  accepts_nested_attributes_for :exercise_measurements, allow_destroy: true

  def grouped_measurements
    exercise_measurements.index_by(&:measurement_type).transform_values do |measurement|
      {
        'unit' => measurement.unit,
        'more_is_better' => measurement.more_is_better,
        'step' => measurement.step_value,
        'min' => measurement.min_value,
        'max' => measurement.max_value
      }.compact
    end
  end
end
