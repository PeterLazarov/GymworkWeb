
module Types
  class BaseMeasurementConfigType < Types::BaseObject
    field :unit, String, null: true
    field :more_is_better, Boolean, null: true
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

  class BaseMeasurementConfigInputType < Types::BaseInputObject
    argument :unit, String, required: false
    argument :more_is_better, Boolean, required: false
  end

  class WeightMeasurementConfigInputType < Types::BaseInputObject
    argument :unit, String, required: false
    argument :more_is_better, Boolean, required: false
    argument :step, Float, required: false
  end

  class MeasurementsInputType < Types::BaseInputObject
    argument :weight, Types::WeightMeasurementConfigInputType, required: false
    argument :reps, Types::BaseMeasurementConfigInputType, required: false
    argument :duration, Types::BaseMeasurementConfigInputType, required: false
    argument :distance, Types::BaseMeasurementConfigInputType, required: false
    argument :speed, Types::BaseMeasurementConfigInputType, required: false
  end
end
