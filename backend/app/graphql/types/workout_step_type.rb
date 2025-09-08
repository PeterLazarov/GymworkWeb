module Types
  class WorkoutStepType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :type, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # Relationships
    field :workout, Types::WorkoutType, null: false
    field :sets, [Types::WorkoutSetType], null: false
    field :exercises, [Types::ExerciseType], null: false
  end
end
