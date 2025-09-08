module Mutations
  class DeleteExerciseMutation < BaseMutation
    graphql_name "DeleteExercise"
    description "Delete an exercise if it's not being used in any workouts"

    argument :exercise_id, ID, required: true

    field :success, Boolean, null: false
    field :errors, [String], null: false

    def resolve(exercise_id:)
      exercise = Exercise.find_by(id: exercise_id)

      if exercise.nil?
        return {
          success: false,
          errors: ["Exercise not found"]
        }
      end

      # Check if exercise is being used in any workout steps
      if exercise.workout_steps.any?
        return {
          success: false,
          errors: ["Cannot delete exercise that is being used in workouts"]
        }
      end

      if exercise.destroy
        {
          success: true,
          errors: []
        }
      else
        {
          success: false,
          errors: exercise.errors.full_messages
        }
      end
    end
  end
end
