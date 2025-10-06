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
    argument :name, String, required: false

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(workout_id:, **attributes)
      workout = Workout.find_by(id: workout_id)
      update_attributes = attributes.compact

      precondition workout.present?, "Workout not found"
      precondition update_attributes.present?, "No attributes provided for update"

      if workout.update(update_attributes)
        { workout:, errors: [] }
      else
        { workout: nil, errors: workout.errors.full_messages }
      end
    end
  end
end
