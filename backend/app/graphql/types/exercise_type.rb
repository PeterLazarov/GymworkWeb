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

    field :steps, [Types::WorkoutStepType], null: false, preload: { workout_steps: [:workout, { sets: :exercise }] } do
      argument :period, String, required: false
    end

    field :last_set, Types::WorkoutSetType, null: true, preload: { workout_sets: :exercise }

    def steps(period: nil)
      scope = object.workout_steps

      if period.present?
        case period
        when '1M'
          scope = scope.joins(:workout).where("workouts.date >= ?", 1.month.ago.to_date)
        when '3M'
          scope = scope.joins(:workout).where("workouts.date >= ?", 3.months.ago.to_date)
        when '1Y'
          scope = scope.joins(:workout).where("workouts.date >= ?", 1.year.ago.to_date)
        when 'All'
          scope = scope.joins(:workout).where("workouts.date >= ?", 1.year.ago.to_date)
        end
      end

      scope.sort_by { |step| step.workout.date }.reverse
    end

    def last_set
      object.workout_sets.order(created_at: :desc).first
    end

    def measurements
      # TODO: use compact but make it work
      object.grouped_measurements
    end
  end
end
