module Mutations
  class DeleteStepMutation < BaseMutation
    graphql_name "DeleteStep"
    description "Delete a workout step and all its associated sets"

    argument :step_id, ID, required: true

    field :success, Boolean, null: false
    field :errors, [String], null: false

    def resolve(step_id:)
      step = WorkoutStep.find_by(id: step_id)

      precondition step.present?, "Workout step not found"

      if step.destroy
        { success: true, errors: [] }
      else
        { success: false, errors: step.errors.full_messages }
      end
    end
  end
end
