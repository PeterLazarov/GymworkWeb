class WorkoutStepExercise < ApplicationRecord
  belongs_to :workout_step
  belongs_to :exercise
end
