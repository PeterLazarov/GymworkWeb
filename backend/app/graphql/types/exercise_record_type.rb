module Types
  class ExerciseRecordType < Types::BaseObject
    field :id, ID, null: false, method: :record_id
    field :exercise, Types::ExerciseType, null: false
    field :reps, Integer, null: false
    field :weight_mcg, GraphQL::Types::BigInt, null: false
    field :date, GraphQL::Types::ISO8601Date, null: false
  end
end
