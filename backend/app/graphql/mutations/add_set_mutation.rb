module Mutations
  class AddSetMutation < BaseMutation
    graphql_name "AddSet"
    description "Add a set to a workout step with exercise metrics"

    argument :workout_step_id, ID, required: true
    argument :exercise_id, ID, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: true

    argument :is_warmup, Boolean, required: false
    argument :reps, Integer, required: false
    argument :weight_mcg, GraphQL::Types::BigInt, required: false
    argument :distance_mm, Integer, required: false
    argument :duration_ms, Integer, required: false
    argument :speed_kph, Float, required: false
    argument :rest_ms, Integer, required: false

    field :set, Types::WorkoutSetType, null: true
    field :errors, [String], null: false

    def resolve(workout_step_id:, exercise_id:, date:, **metrics)
      step = WorkoutStep.find_by(id: workout_step_id)
      exercise = Exercise.find_by(id: exercise_id)

      precondition step.present?, "Workout step not found"
      precondition exercise.present?, "Exercise not found"
      precondition step.exercises.include?(exercise), "Exercise does not belong to this workout step"

      set = step.sets.new(
        exercise: exercise,
        date: date,
        **metrics
      )

      if set.save
        { set:, errors: [] }
      else
        { set: nil, errors: set.errors.full_messages }
      end
    end
  end
end
