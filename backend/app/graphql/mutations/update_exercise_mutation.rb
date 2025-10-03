module Mutations
  class UpdateExerciseMutation < BaseMutation
    graphql_name "UpdateExercise"
    description "Update an exercise's details"

    argument :exercise_id, ID, required: true
    argument :name, String, required: true, description: "Name of the exercise"
    argument :muscles, [String], required: false, description: "Scientific muscle names"
    argument :muscle_areas, [String], required: false, description: "General muscle groups"
    argument :instructions, [String], required: false, description: "Optional instructions of the exercise"
    argument :measurements, Types::MeasurementsInputType, required: false, description: "Optional measurements of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(exercise_id:, measurements:, **attributes)
      exercise = Exercise.find_by(id: exercise_id)

      if exercise.nil?
        return {
          exercise: nil,
          errors: ["Exercise not found"]
        }
      end

      update_attributes = attributes.compact

      if measurements.present?
        exercise.exercise_measurements.destroy_all

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

        update_attributes[:exercise_measurements_attributes] = exercise_measurements_attributes
      end

      if update_attributes.empty?
        return {
          exercise: exercise,
          errors: ["No attributes provided for update"]
        }
      end

      if exercise.update(update_attributes)
        {
          exercise: exercise,
          errors: []
        }
      else
        {
          exercise: nil,
          errors: exercise.errors.full_messages
        }
      end
    end
  end
end
