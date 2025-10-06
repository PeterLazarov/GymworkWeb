module Mutations
  class DeleteWorkoutMutation < BaseMutation
    graphql_name "DeleteWorkout"
    description "Delete a workout and all its associated steps and sets"

    argument :workout_id, ID, required: true

    field :success, Boolean, null: false
    field :errors, [String], null: false

    def resolve(workout_id:)
      workout = Workout.find_by(id: workout_id)

      precondition workout.present?, "Workout not found"

      if workout.destroy
        { success: true, errors: [] }
      else
        { success: false, errors: workout.errors.full_messages }
      end
    end
  end
end
