module Mutations
  class UpdateExerciseMutation < BaseMutation
    graphql_name "UpdateExercise"
    description "Update an exercise's details"

    argument :exercise_id, ID, required: true
    argument :name, String, required: false, description: "Name of the exercise"
    argument :description, String, required: false, description: "Description of the exercise"

    field :exercise, Types::ExerciseType, null: true
    field :errors, [String], null: false

    def resolve(exercise_id:, **attributes)
      exercise = Exercise.find_by(id: exercise_id)

      if exercise.nil?
        return {
          exercise: nil,
          errors: ["Exercise not found"]
        }
      end

      # Filter out nil values to only update provided attributes
      update_attributes = attributes.compact

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
