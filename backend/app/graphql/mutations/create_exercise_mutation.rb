module Mutations
  class CreateExerciseMutation < BaseMutation
    graphql_name "CreateExercise"
    description "Create a new exercise"

    argument :name, String, required: true, description: "Name of the exercise"
    argument :muscles, [String], required: false, description: "Scientific muscle names"
    argument :muscle_areas, [String], required: false, description: "General muscle groups"
    argument :instructions, [String], required: false, description: "Optional instructions of the exercise"
    argument :measurements, Types::MeasurementsInputType, required: false, description: "Optional measurements of the exercise"
    argument :active_measurements, [String], required: false, description: "Optional active measurements of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(measurements:, active_measurements:, **attributes)
      exercise = Exercise.new(**attributes)

      attributes[:reps_measurement] = measurements[:reps]
      attributes[:weight_measurement] = measurements[:weight]
      attributes[:distance_measurement] = measurements[:distance]
      attributes[:duration_measurement] = measurements[:duration]
      attributes[:speed_measurement] = measurements[:speed]

      if exercise.save
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
