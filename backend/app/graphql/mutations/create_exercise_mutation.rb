module Mutations
  class CreateExerciseMutation < BaseMutation
    graphql_name "CreateExercise"
    description "Create a new exercise"

    argument :name, String, required: true, description: "Name of the exercise"
    argument :muscles, [String], required: false, description: "Scientific muscle names"
    argument :muscle_areas, [String], required: false, description: "General muscle groups"
    argument :instructions, [String], required: false, description: "Optional instructions of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(**attributes)
      exercise = Exercise.new(**attributes)

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
