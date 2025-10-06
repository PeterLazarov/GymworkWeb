module Mutations
  class DeleteExerciseMutation < BaseMutation
    graphql_name "DeleteExercise"
    description "Delete an exercise if it's not being used in any workouts"

    argument :exercise_id, ID, required: true

    field :success, Boolean, null: false
    field :errors, [String], null: false

    def resolve(exercise_id:)
      exercise = Exercise.find_by(id: exercise_id)

      precondition exercise.present?, "Exercise not found"
      precondition exercise.workout_steps.empty?, "Exercise is being used in workouts"

      if exercise.destroy
        { success: true, errors: [] }
      else
        { success: false, errors: exercise.errors.full_messages }
      end
    end
  end
end
