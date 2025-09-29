module Types
  class ExerciseType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :name, String, null: false
    field :images, [String], null: false
    field :equipment, [String], null: false
    field :position, String, null: true
    field :stance, String, null: true
    field :instructions, [String], null: false
    field :tips, [String], null: true
    field :muscle_areas, [String], null: false
    field :muscles, [String], null: false
    field :measurements, Types::MeasurementsType, null: false
    field :is_favorite, Boolean, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :workout_steps, [Types::WorkoutStepType], null: false, preload: { workout_steps: [:workout, { sets: :exercise }] }
    field :workout_sets, [Types::WorkoutSetType], null: false, preload: { workout_steps: { sets: :exercise } }
    field :steps, [Types::WorkoutStepType], null: false, preload: { workout_steps: [:workout, { sets: :exercise }] }

    def steps
      object.workout_steps.sort_by { |step| step.workout.date }.reverse
    end

    def measurements
      output = {}
      output[:reps] = object.reps_measurement if object.reps_measurement.present?
      output[:weight] = object.weight_measurement if object.weight_measurement.present?
      output[:distance] = object.distance_measurement if object.distance_measurement.present?
      output[:duration] = object.duration_measurement if object.duration_measurement.present?
      output[:speed] = object.speed_measurement if object.speed_measurement.present?
      output
    end
  end
end
