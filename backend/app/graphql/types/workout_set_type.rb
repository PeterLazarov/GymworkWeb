require 'ruby-units'

module Types
  class WorkoutSetType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :date, GraphQL::Types::ISO8601Date, null: false
    field :is_warmup, Boolean, null: false
    field :is_weak_ass_record, Boolean, null: false
    field :reps, Integer, null: true
    field :weight_mcg, GraphQL::Types::BigInt, null: true
    field :distance_mm, Integer, null: true
    field :duration_ms, Integer, null: true
    field :speed_kph, Float, null: true
    field :rest_ms, Integer, null: true
    field :completed_at, GraphQL::Types::ISO8601DateTime, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :workout_step, Types::WorkoutStepType, null: false, preload: :workout_step
    field :exercise, Types::ExerciseType, null: false, preload: :exercise

    field :weight, Float, null: true, preload: :exercise
    field :distance, Float, null: true, preload: :exercise

    def weight
      measurement = object.exercise.measurements["weight"]
      return nil unless measurement

      Unit.new("#{object.weight_mcg} mcg").convert_to(measurement['unit']).scalar
    end

    def distance
      measurement = object.exercise.measurements["distance"]
      return nil unless measurement

      Unit.new("#{object.distance_mm} mm").convert_to(measurement['unit']).scalar
    end
  end
end
