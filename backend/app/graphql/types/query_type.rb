# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    field :exercise, Types::ExerciseType, null: true, preload: { workout_steps: { workout: {}, sets: { exercise: {} } } } do
      argument :id, ID, required: true
    end

    field :workout, Types::WorkoutType, null: true, preload: { steps: { exercises: {}, sets: { exercise: {} } } } do
      argument :id, ID, required: false
      argument :date, GraphQL::Types::ISO8601Date, required: false
    end

    field :exercises, Types::ExerciseType.connection_type, null: false, preload: { workout_steps: { workout: {}, sets: { exercise: {} } } } do
      argument :id, ID, required: false
      argument :is_favorite, Boolean, required: false
      argument :muscle_areas, [String], required: false
      argument :muscles, [String], required: false
      argument :equipment, [String], required: false
      argument :name, String, required: false
    end

    field :workouts, Types::WorkoutType.connection_type, null: false, preload: { steps: { exercises: {}, sets: { exercise: {} } } } do
      argument :from_date, GraphQL::Types::ISO8601Date, required: false
      argument :to_date, GraphQL::Types::ISO8601Date, required: false
      argument :date, GraphQL::Types::ISO8601Date, required: false
      argument :feeling, String, required: false
      argument :pain, String, required: false
      argument :rpe, String, required: false
      argument :muscles, [String], required: false
      argument :muscle_areas, [String], required: false
      argument :notes, String, required: false
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

    def exercises(id: nil, is_favorite: nil, muscle_areas: nil, muscles: nil, equipment: nil, name: nil)
      scope = Exercise.includes(workout_steps: [:workout, { sets: :exercise }])

      scope = scope.where(id:) if id.present?
      scope = scope.where(is_favorite:) unless is_favorite.nil?
      scope = scope.where("name ILIKE ?", "%#{name}%") if name.present?
      scope = scope.where("muscle_areas && ARRAY[?]::varchar[]", muscle_areas) if muscle_areas.present?
      scope = scope.where("muscles && ARRAY[?]::varchar[]", muscles) if muscles.present?
      scope = scope.where("equipment && ARRAY[?]::varchar[]", equipment) if equipment.present?

      scope.order(:name)
    end

    def workouts(from_date: nil, to_date: nil, date: nil, feeling: nil, pain: nil, rpe: nil, muscles: nil, muscle_areas: nil, notes: nil)
      scope = Workout.includes(steps: [:exercises, { sets: :exercise }], sets: :exercise)

      scope = scope.where("date >= ?", from_date) if from_date.present?
      scope = scope.where("date <= ?", to_date) if to_date.present?
      scope = scope.where(date: date) if date.present?
      scope = scope.where(feeling: feeling) if feeling.present?
      scope = scope.where(pain: pain) if pain.present?
      scope = scope.where(rpe: rpe) if rpe.present?

      if muscles.present?
        scope = scope.
          joins(:steps).
          joins(:steps => :exercises).
          where("exercises.muscles && ARRAY[?]::varchar[]", muscles)
      end
      if muscle_areas.present?
        scope = scope.
          joins(:steps).
          joins(:steps => :exercises).
          where("exercises.muscle_areas && ARRAY[?]::varchar[]", muscle_areas)
      end

      scope = scope.where("notes ILIKE ?", "%#{notes}%") if notes.present?

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
