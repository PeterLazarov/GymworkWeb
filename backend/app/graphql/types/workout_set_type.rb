module Types
  class WorkoutSetType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :date, GraphQL::Types::ISO8601Date, null: false
    field :is_warmup, Boolean, null: false
    field :is_weak_ass_record, Boolean, null: false
    field :reps, Integer, null: true
    field :weight_mcg, Integer, null: true
    field :distance_mm, Integer, null: true
    field :duration_ms, Integer, null: true
    field :speed_kph, Float, null: true
    field :rest_ms, Integer, null: true
    field :completed_at, GraphQL::Types::ISO8601DateTime, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    # Relationships
    field :workout_step, Types::WorkoutStepType, null: false
    field :exercise, Types::ExerciseType, null: false
  end
end
