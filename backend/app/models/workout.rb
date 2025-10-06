class Workout < ApplicationRecord
  has_many :steps, dependent: :destroy, class_name: :WorkoutStep
  has_many :sets, through: :steps
end
