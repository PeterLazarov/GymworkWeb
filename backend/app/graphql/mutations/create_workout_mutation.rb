module Mutations
  class CreateWorkoutMutation < BaseMutation
    graphql_name "CreateWorkout"
    description "Creates a new workout with the specified date"

    argument :date, GraphQL::Types::ISO8601DateTime, required: true
    argument :template_id, ID, required: false

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(date:, template_id:)
      workout = Workout.create!(date: date)

      if template_id.present?
        template = Workout.find_by(id: template_id)
        precondition template.present?, "Template not found"

        template.steps.each do |template_step|
          step = workout.steps.create!(
            step_type: template_step.step_type
          )

          template_step.exercises.each do |exercise|
            step.workout_step_exercises.create!(exercise: exercise)
          end
        end
      end

      if workout.errors.empty?
        { workout:, errors: [] }
      else
        { workout: nil, errors: workout.errors.full_messages }
      end
    rescue ActiveRecord::RecordInvalid => e
      { workout: nil, errors: e.record.errors.full_messages }
    rescue StandardError => e
      { workout: nil, errors: ["Failed to create workout: #{e.message}"] }
    end
  end
end
