
module Types
  class BaseMeasurementConfigType < Types::BaseObject
    field :unit, String, null: true
    field :more_is_better, Boolean, null: false
  end

  class WeightMeasurementConfigType < Types::BaseMeasurementConfigType
    field :step, Float, null: false
  end

  class MeasurementsType < Types::BaseObject
    field :weight, Types::WeightMeasurementConfigType, null: true
    field :reps, Types::BaseMeasurementConfigType, null: true
    field :duration, Types::BaseMeasurementConfigType, null: true
    field :distance, Types::BaseMeasurementConfigType, null: true
    field :speed, Types::BaseMeasurementConfigType, null: true
  end
end
