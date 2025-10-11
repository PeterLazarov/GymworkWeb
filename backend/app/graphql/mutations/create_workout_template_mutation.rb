module Mutations
  class CreateWorkoutTemplateMutation < BaseMutation
    graphql_name "CreateWorkoutTemplate"
    description "Creates a new workout template"

    argument :source_workout_id, ID, required: true
    argument :name, String, required: true

    field :template, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(source_workout_id:, name:)
      workout = Workout.find source_workout_id
      precondition workout.present?, "Workout not found"

      template = workout.dup
      template.is_template = true
      template.date = nil
      template.name = name

      workout.steps.each do |step|
        template_step = step.dup
        template_step.workout = template
        template_step.save!

        step.exercises.each do |exercise|
          template_step.workout_step_exercises.create!(exercise: exercise)
        end
      end

      if template.save
        { template:, errors: [] }
      else
        { workout: nil, errors: template.errors.full_messages }
      end
    end
  end
end
