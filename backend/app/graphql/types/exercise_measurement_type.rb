module Types
  class ExerciseMeasurementType < Types::BaseObject
    field :id, ID, null: false
    field :measurement_type, String, null: false
    field :unit, String, null: false
    field :more_is_better, Boolean, null: false
    field :step_value, Float, null: true
    field :min_value, Float, null: true
    field :max_value, Float, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
