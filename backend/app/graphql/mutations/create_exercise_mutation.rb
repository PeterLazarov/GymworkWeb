module Mutations
  class CreateExerciseMutation < BaseMutation
    graphql_name "CreateExercise"
    description "Create a new exercise"

    argument :name, String, required: true, description: "Name of the exercise"
    argument :description, String, required: false, description: "Optional description of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(name:, description: nil)
      exercise = Exercise.new(
        name: name,
        description: description
      )

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
