module Types
  class WorkoutType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :date, GraphQL::Types::ISO8601Date, null: false
    field :notes, String, null: true
    field :feeling, String, null: true
    field :pain, String, null: true
    field :rpe, Integer, null: true
    field :ended_at, GraphQL::Types::ISO8601DateTime, null: true
    field :duration_ms, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # Relationships
    field :steps, [Types::WorkoutStepType], null: false
    field :workout_sets, [Types::WorkoutSetType], null: false
  end
end
