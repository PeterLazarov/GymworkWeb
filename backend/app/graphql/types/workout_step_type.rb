module Types
  class WorkoutStepType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :type, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :workout, Types::WorkoutType, null: false, preload: :workout
    field :sets, [Types::WorkoutSetType], null: false, preload: { sets: { exercise: :exercise_measurements } }
    field :exercises, [Types::ExerciseType], null: false, preload: { exercises: :exercise_measurements }

    field :date, GraphQL::Types::ISO8601Date, null: false, preload: :workout

    def date
      object.workout.date
    end
  end
end
