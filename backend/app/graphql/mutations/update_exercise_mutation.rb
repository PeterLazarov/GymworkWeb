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
    argument :active_measurements, [String], required: false, description: "Optional active measurements of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(exercise_id:, measurements:, active_measurements:, **attributes)
      exercise = Exercise.find_by(id: exercise_id)

      if exercise.nil?
        return {
          exercise: nil,
          errors: ["Exercise not found"]
        }
      end

      # Filter out nil values to only update provided attributes
      update_attributes = attributes.compact

      update_attributes[:reps_measurement] = measurements[:reps]
      update_attributes[:weight_measurement] = measurements[:weight]
      update_attributes[:distance_measurement] = measurements[:distance]
      update_attributes[:duration_measurement] = measurements[:duration]
      update_attributes[:speed_measurement] = measurements[:speed]

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
