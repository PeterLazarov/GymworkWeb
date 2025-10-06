module Mutations
  class CreateExerciseMutation < BaseMutation
    graphql_name "CreateExercise"
    description "Create a new exercise"

    argument :name, String, required: true, description: "Name of the exercise"
    argument :muscles, [String], required: false, description: "Scientific muscle names"
    argument :muscle_areas, [String], required: false, description: "General muscle groups"
    argument :instructions, [String], required: false, description: "Optional instructions of the exercise"
    argument :measurements, Types::MeasurementsInputType, required: false, description: "Optional measurements of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(measurements:, **attributes)
      exercise_attributes = attributes.compact

      if measurements.present?
        exercise_measurements_attributes = measurements.map do |measurement_type, measurement_data|
          next unless measurement_data.present?

          attrs = {
            measurement_type: measurement_type,
            unit: measurement_data.unit,
            more_is_better: measurement_data.more_is_better
          }

          attrs[:step_value] = measurement_data.step if measurement_data.respond_to?(:step)
          attrs.compact
        end.compact

        exercise_attributes[:exercise_measurements_attributes] = exercise_measurements_attributes
      end

      exercise = Exercise.new(exercise_attributes)

      if exercise.save
        { exercise:, errors: [] }
      else
        { exercise: nil, errors: exercise.errors.full_messages }
      end
    end
  end
end
