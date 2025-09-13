module Mutations
  class UpdateWorkoutMutation < BaseMutation
    graphql_name "UpdateWorkout"
    description "Update a workout's details"

    argument :workout_id, ID, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: false
    argument :feeling, String, required: false
    argument :rpe, Integer, required: false
    argument :notes, String, required: false
    argument :pain, String, required: false

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(workout_id:, **attributes)
      workout = Workout.find_by(id: workout_id)

      if workout.nil?
        return {
          workout: nil,
          errors: ["Workout not found"]
        }
      end

      # Filter out nil values to only update provided attributes
      update_attributes = attributes.compact

      if update_attributes.empty?
        return {
          workout: workout,
          errors: ["No attributes provided for update"]
        }
      end

      if workout.update(update_attributes)
        {
          workout: workout,
          errors: []
        }
      else
        {
          workout: nil,
          errors: workout.errors.full_messages
        }
      end
    end
  end
end
