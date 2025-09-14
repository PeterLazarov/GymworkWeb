module Resolvers
  class WorkoutSetsResolver < BaseResolver
    type [Types::WorkoutSetType], null: false

    argument :exercise_id, ID, required: false

    def resolve(exercise_id: nil)
      records = WorkoutSet.includes(:exercise)
      records = records.where(exercise_id: exercise_id) if exercise_id
      records.order(:exercise_id, :date)
    end
  end
end
