module Mutations
  class AddStepMutation < BaseMutation
    graphql_name "AddStep"
    description "Add a step to a workout with associated exercises"

    VALID_TYPES = %w[superset regular].freeze

    argument :workout_id, ID, required: true
    argument :exercise_ids, [ID], required: true
    argument :type, String, required: true, description: "Type of step: superset, circuit, or regular"

    field :step, Types::WorkoutStepType, null: true
    field :errors, [String], null: false

    def resolve(workout_id:, exercise_ids:, type:)
      # Validate type first
      unless VALID_TYPES.include?(type)
        return {
          step: nil,
          errors: ["Invalid step type. Must be one of: #{VALID_TYPES.join(', ')}"]
        }
      end

      # Find workout
      workout = Workout.find_by(id: workout_id)
      if workout.nil?
        return {
          step: nil,
          errors: ["Workout not found"]
        }
      end

      # Find and validate exercises
      exercises = Exercise.where(id: exercise_ids)
      missing_exercise_ids = exercise_ids - exercises.pluck(:id).map(&:to_s)
      if missing_exercise_ids.any?
        return {
          step: nil,
          errors: ["Exercises not found with IDs: #{missing_exercise_ids.join(', ')}"]
        }
      end

      # Create step and associations in a transaction
      step = nil
      ActiveRecord::Base.transaction do
        step = workout.steps.create!(type: type)
        exercises.each do |exercise|
          step.workout_step_exercises.create!(exercise: exercise)
        end
      end

      {
        step: step,
        errors: []
      }
    rescue ActiveRecord::RecordInvalid => e
      {
        step: nil,
        errors: e.record.errors.full_messages
      }
    end
  end
end
