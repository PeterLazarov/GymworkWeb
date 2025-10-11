module Types
  class WorkoutType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :date, GraphQL::Types::ISO8601Date, null: true
    field :notes, String, null: true
    field :feeling, String, null: true
    field :pain, String, null: true
    field :rpe, Integer, null: true
    field :ended_at, GraphQL::Types::ISO8601DateTime, null: true
    field :duration_ms, Integer, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :is_template, Boolean, null: false
    field :name, String, null: true

    field :steps, [Types::WorkoutStepType], null: false, preload: { steps: [:exercises, { sets: :exercise }] }
    field :workout_sets, [Types::WorkoutSetType], null: false, preload: { sets: :exercise }

    field :muscles, [String], null: false
    field :muscle_areas, [String], null: false
    field :has_comments, Boolean, null: false

    def has_comments
      object.notes.present? || object.feeling.present? || object.rpe.present? || object.pain.present?
    end

    def muscles
      object.steps.flat_map { |steps| steps.exercises.flat_map(&:muscles) }.uniq
    end

    def muscle_areas
      object.steps.flat_map { |steps| steps.exercises.flat_map(&:muscle_areas) }.uniq
    end
  end
end
