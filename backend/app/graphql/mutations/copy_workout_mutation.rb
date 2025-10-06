module Mutations
  class CopyWorkoutMutation < BaseMutation
    graphql_name "CopyWorkout"
    description "Copy an existing workout to a new date"

    argument :source_workout_id, ID, required: true, description: "ID of the workout to copy"
    argument :target_date, GraphQL::Types::ISO8601DateTime, required: true, description: "Date for the new workout"

    field :workout, Types::WorkoutType, null: true
    field :errors, [String], null: false

    def resolve(source_workout_id:, target_date:)
      source_workout = Workout.find_by(id: source_workout_id)
      existing_workout = Workout.find_by(date: target_date)

      precondition source_workout.present?, "Source workout not found"
      precondition existing_workout.nil?, "A workout already exists for #{target_date.strftime('%Y-%m-%d')}"

      new_workout = nil

      ActiveRecord::Base.transaction do
        new_workout = Workout.create!(
          date: target_date,
          notes: source_workout.notes,
          feeling: source_workout.feeling,
          pain: source_workout.pain,
          rpe: source_workout.rpe
        )

        source_workout.steps.each do |source_step|
          new_step = new_workout.steps.create!(
            step_type: source_step.step_type
          )

          source_step.exercises.each do |exercise|
            new_step.workout_step_exercises.create!(exercise: exercise)
          end

          source_step.sets.each do |source_set|
            new_step.sets.create!(
              exercise: source_set.exercise,
              reps: source_set.reps,
              weight_mcg: source_set.weight_mcg,
              distance_mm: source_set.distance_mm,
              duration_ms: source_set.duration_ms,
              speed_kph: source_set.speed_kph,
              is_warmup: source_set.is_warmup,
              rest_ms: source_set.rest_ms,
              date: target_date
            )
          end
        end
      end

      { workout: new_workout, errors: [] }
    rescue ActiveRecord::RecordInvalid => e
      { workout: nil, errors: e.record.errors.full_messages }
    rescue StandardError => e
      { workout: nil, errors: ["Failed to copy workout: #{e.message}"] }
    end
  end
end
