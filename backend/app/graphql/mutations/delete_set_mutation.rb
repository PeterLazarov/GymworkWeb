module Mutations
  class DeleteSetMutation < BaseMutation
    graphql_name "DeleteSet"
    description "Delete a workout set"

    argument :set_id, ID, required: true

    field :success, Boolean, null: false
    field :errors, [String], null: false

    def resolve(set_id:)
      set = WorkoutSet.find_by(id: set_id)

      if set.nil?
        return {
          success: false,
          errors: ["Workout set not found"]
        }
      end

      if set.destroy
        {
          success: true,
          errors: []
        }
      else
        {
          success: false,
          errors: set.errors.full_messages
        }
      end
    end
  end
end
