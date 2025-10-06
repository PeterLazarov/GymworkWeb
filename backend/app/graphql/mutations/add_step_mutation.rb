module Mutations
  class AddStepMutation < BaseMutation
    graphql_name "AddStep"
    description "Add a step to a workout with associated exercises"

    VALID_TYPES = %w[superset regular].freeze

    argument :workout_date, String, required: true
    argument :exercise_ids, [ID], required: true

    field :step, Types::WorkoutStepType, null: true
    field :errors, [String], null: false

    def resolve(workout_date:, exercise_ids:)
      workout = Workout.find_by(date: workout_date)
      precondition workout.present?, "Workout not found"

      exercises = Exercise.where(id: exercise_ids)
      missing_exercise_ids = exercise_ids - exercises.pluck(:id).map(&:to_s)
      precondition missing_exercise_ids.empty?, "Exercises not found with IDs: #{missing_exercise_ids.join(', ')}"

      step = nil
      ActiveRecord::Base.transaction do
        step = workout.steps.create!(step_type: 'regular')
        exercises.each do |exercise|
          step.workout_step_exercises.create!(exercise: exercise)
        end
      end

      { step:, errors: [] }
    rescue ActiveRecord::RecordInvalid => e
      { step: nil, errors: e.record.errors.full_messages }
    end
  end
end
