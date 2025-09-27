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

    field :muscles, [String], null: false
    field :muscle_areas, [String], null: false
    field :has_comments, Boolean, null: false

    def has_comments
      object.notes.present? || object.feeling.present? || object.rpe.present? || object.pain.present?
    end

    def muscles
      object.sets.flat_map { |set| set.exercise.muscles }.uniq
    end

    def muscle_areas
      object.sets.flat_map { |set| set.exercise.muscle_areas }.uniq
    end
  end
end
