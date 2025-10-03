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

    field :weight, Float, null: true, preload: { exercise: :exercise_measurements }
    field :distance, Float, null: true, preload: { exercise: :exercise_measurements }

    def weight
      measurement = object.exercise.exercise_measurements.find_by_type('weight')
      return nil unless measurement

      Unit.new("#{object.weight_mcg || 0} mcg").convert_to(measurement.unit).scalar
    end

    def distance
      measurement = object.exercise.exercise_measurements.find_by_type('distance')
      return nil unless measurement

      Unit.new("#{object.distance_mm || 0} mm").convert_to(measurement.unit).scalar
    end
  end
end
