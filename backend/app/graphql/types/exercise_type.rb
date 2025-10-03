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
    field :exercise_measurements, [Types::ExerciseMeasurementType], null: false
    field :is_favorite, Boolean, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :steps, [Types::WorkoutStepType], null: false, preload: { workout_steps: [:workout, { sets: :exercise }] }

    def steps
      object.workout_steps.sort_by { |step| step.workout.date }.reverse
    end

    def measurements
      object.grouped_measurements
    end
  end
end
