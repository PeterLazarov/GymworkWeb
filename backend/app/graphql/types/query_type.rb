# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    field :exercise, Types::ExerciseType, null: true, preload: { workout_steps: [:workout, { sets: :exercise }] } do
      argument :id, ID, required: true
    end

    field :workout, Types::WorkoutType, null: true, preload: { steps: [:exercises, { sets: :exercise }] } do
      argument :id, ID, required: false
      argument :date, GraphQL::Types::ISO8601Date, required: false
    end

    class ExerciseFilterType < GraphQL::Schema::InputObject
      graphql_name 'ExerciseFilter'

      argument :is_favorite, Boolean, required: false
      argument :muscle_areas, [String], required: false
      argument :muscles, [String], required: false
      argument :equipment, [String], required: false
      argument :name, String, required: false
    end

    field :exercises, Types::ExerciseType.connection_type, null: false, preload: { workout_steps: [:workout, { sets: :exercise }] } do
      argument :filter, ExerciseFilterType, required: false
    end

    class WorkoutFilterType < GraphQL::Schema::InputObject
      graphql_name 'WorkoutFilter'

      argument :date_from, GraphQL::Types::ISO8601Date, required: false
      argument :date_to, GraphQL::Types::ISO8601Date, required: false
      argument :date, GraphQL::Types::ISO8601Date, required: false
      argument :feeling, String, required: false
      argument :pain, String, required: false
      argument :rpe, String, required: false
      argument :muscles, [String], required: false
      argument :muscle_areas, [String], required: false
      argument :notes, String, required: false
    end

    field :workouts, Types::WorkoutType.connection_type, null: false, preload: { steps: [:exercises, { sets: :exercise }] } do
      argument :filter, WorkoutFilterType, required: false
    end

    field :exercise_records, [Types::ExerciseRecordType], null: false, preload: :exercise do
      argument :exercise_id, ID, required: false
    end

    field :settings, Types::SettingsType, null: false

    field :muscle_area_stats, [Types::MuscleAreaStatType], null: false do
      argument :ascending, Boolean, required: false, default_value: false
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    def exercise(id:)
      Exercise.find id
    end

    def workout(id: nil, date: nil)
      if id
        Workout.find id
      elsif date
        Workout.find_by(date: date)
      else
        nil
      end
    end

    def exercises(filter: nil)
      scope = Exercise.includes(workout_steps: [:workout, { sets: :exercise }])

      if filter
        scope = scope.where(is_favorite: filter[:is_favorite]) unless filter[:is_favorite].nil?
        scope = scope.where("name ILIKE ?", "%#{filter[:name]}%") if filter[:name].present?
        scope = scope.where("muscle_areas && ARRAY[?]::varchar[]", filter[:muscle_areas]) if filter[:muscle_areas].present?
        scope = scope.where("muscles && ARRAY[?]::varchar[]", filter[:muscles]) if filter[:muscles].present?
        scope = scope.where("equipment && ARRAY[?]::varchar[]", filter[:equipment]) if filter[:equipment].present?
      end

      scope.order(:name)
    end

    def workouts(filter: nil)
      scope = Workout.includes(steps: [:exercises, { sets: :exercise }], sets: :exercise)

      if filter
        scope = scope.where("date >= ?", filter[:date_from]) if filter[:date_from].present?
        scope = scope.where("date <= ?", filter[:date_to]) if filter[:date_to].present?
        scope = scope.where(date: filter[:date]) if filter[:date].present?
        scope = scope.where(feeling: filter[:feeling]) if filter[:feeling].present?
        scope = scope.where(pain: filter[:pain]) if filter[:pain].present?
        scope = scope.where(rpe: filter[:rpe]) if filter[:rpe].present?

        if filter[:muscles].present?
          scope = scope.
            joins(:steps).
            joins(:steps => :exercises).
            where("exercises.muscles && ARRAY[?]::varchar[]", filter[:muscles])
        end
        if filter[:muscle_areas].present?
          scope = scope.
            joins(:steps).
            joins(:steps => :exercises).
            where("exercises.muscle_areas && ARRAY[?]::varchar[]", filter[:muscle_areas])
        end

        scope = scope.where("notes ILIKE ?", "%#{filter[:notes]}%") if filter[:notes].present?
      end

      scope.distinct.order(date: :desc)
    end

    def exercise_records(exercise_id: nil)
      records = ExerciseRecord.includes(:exercise)
      records = records.where(exercise_id: exercise_id) if exercise_id
      records.order(:exercise_id, :reps)
    end

    def settings
      Settings.first_or_create!
    end

    def muscle_area_stats(ascending: false)
      return [] if Workout.count.zero?

      MuscleAreaStat.order(percentage: ascending ? :asc : :desc)
    end
  end
end
