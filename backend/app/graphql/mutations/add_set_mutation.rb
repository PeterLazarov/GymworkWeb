module Mutations
  class AddSetMutation < BaseMutation
    graphql_name "AddSet"
    description "Add a set to a workout step with exercise metrics"

    argument :workout_step_id, ID, required: true
    argument :exercise_id, ID, required: true
    argument :date, GraphQL::Types::ISO8601DateTime, required: true

    # Optional exercise metrics
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
      # Find workout step
      step = WorkoutStep.find_by(id: workout_step_id)
      if step.nil?
        return {
          set: nil,
          errors: ["Workout step not found"]
        }
      end

      # Find and validate exercise
      exercise = Exercise.find_by(id: exercise_id)
      if exercise.nil?
        return {
          set: nil,
          errors: ["Exercise not found"]
        }
      end

      # Validate exercise belongs to step
      unless step.exercises.include?(exercise)
        return {
          set: nil,
          errors: ["Exercise does not belong to this workout step"]
        }
      end

      # Create set with metrics
      set = step.sets.new(
        exercise: exercise,
        date: date,
        **metrics
      )

      if set.save
        {
          set: set,
          errors: []
        }
      else
        {
          set: nil,
          errors: set.errors.full_messages
        }
      end
    end
  end
end
