class WorkoutStepExercise < ApplicationRecord
  # Relationships
  belongs_to :workout_step
  belongs_to :exercise
end
