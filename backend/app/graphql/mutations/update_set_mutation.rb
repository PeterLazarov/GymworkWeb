module Mutations
  class UpdateSetMutation < BaseMutation
    graphql_name "UpdateSet"
    description "Update a workout set's metrics"

    argument :set_id, ID, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: false
    argument :is_warmup, Boolean, required: false
    argument :reps, Integer, required: false
    argument :weight_mcg, GraphQL::Types::BigInt, required: false
    argument :distance_mm, Integer, required: false
    argument :duration_ms, Integer, required: false
    argument :speed_kph, Float, required: false
    argument :rest_ms, Integer, required: false

    field :set, Types::WorkoutSetType, null: true
    field :errors, [String], null: false

    def resolve(set_id:, **attributes)
      set = WorkoutSet.find_by(id: set_id)

      if set.nil?
        return {
          set: nil,
          errors: ["Workout set not found"]
        }
      end

      # Filter out nil values to only update provided attributes
      update_attributes = attributes.compact

      if update_attributes.empty?
        return {
          set: set,
          errors: ["No attributes provided for update"]
        }
      end

      if set.update(update_attributes)
        {
          set: set,
          errors: []
        }
      else
        {
          set: nil,
          errors: set.errors.full_messages
        }
      end
    end
  end
end
