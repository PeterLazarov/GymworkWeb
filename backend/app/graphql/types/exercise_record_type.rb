module Types
  class ExerciseRecordType < Types::BaseObject
    field :id, ID, null: false, method: :record_id
    field :exercise, Types::ExerciseType, null: false, preload: :exercise
    field :reps, Integer, null: true
    field :weight_mcg, GraphQL::Types::BigInt, null: true
    field :distance_mm, Integer, null: true
    field :duration_ms, Integer, null: true
    field :speed_kph, Float, null: true
    field :date, GraphQL::Types::ISO8601Date, null: false

    field :weight, Float, null: true, preload: :exercise
    field :distance, Float, null: true, preload: :exercise

    def weight
      measurement = object.exercise.weight_measurement
      return nil unless measurement

      Unit.new("#{object.weight_mcg || 0} mcg").convert_to(measurement['unit']).scalar
    end

    def distance
      measurement = object.exercise.distance_measurement
      return nil unless measurement

      Unit.new("#{object.distance_mm || 0} mm").convert_to(measurement['unit']).scalar
    end
  end
end
