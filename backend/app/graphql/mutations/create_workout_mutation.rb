module Mutations
  class CreateWorkoutMutation < BaseMutation
    graphql_name "CreateWorkout"
    description "Creates a new workout with the specified date"

    argument :date, GraphQL::Types::ISO8601DateTime, required: true

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(date:)
      workout = Workout.new(date: date)

      if workout.save
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
