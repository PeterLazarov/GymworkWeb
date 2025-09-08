module Mutations
  class UpdateWorkoutMutation < BaseMutation
    graphql_name "UpdateWorkout"
    description "Update a workout's date"

    argument :workout_id, ID, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: true

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(workout_id:, date:)
      workout = Workout.find_by(id: workout_id)

      if workout.nil?
        return {
          workout: nil,
          errors: ["Workout not found"]
        }
      end

      if workout.update(date: date)
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
