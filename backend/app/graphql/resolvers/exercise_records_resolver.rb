module Resolvers
  class ExerciseRecordsResolver < BaseResolver
    type [Types::ExerciseRecordType], null: false

    argument :exercise_id, ID, required: false

    def resolve(exercise_id: nil)
      records = ExerciseRecord.includes(:exercise)
      records = records.where(exercise_id: exercise_id) if exercise_id
      records.order(:exercise_id, :reps)
    end
  end
end
