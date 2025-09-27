# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    field :exercise, Types::ExerciseType, null: true do
      argument :id, ID, required: true
    end

    field :workout, Types::WorkoutType, null: true do
      argument :id, ID, required: false
      argument :date, GraphQL::Types::ISO8601Date, required: false
    end

    field :exercises, resolver: Resolvers::ExercisesResolver
    field :workouts, resolver: Resolvers::WorkoutsResolver
    field :exercise_records, resolver: Resolvers::ExerciseRecordsResolver
    field :settings, resolver: Resolvers::SettingsResolver
    field :muscle_area_stats, resolver: Resolvers::MuscleAreaStatsResolver

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    def exercise(id:)
      Exercise.includes(workout_steps: [:workout, { sets: :exercise }]).find id
    end

    def workout(id: nil, date: nil)
      scope = Workout.includes(steps: [:exercises, { sets: :exercise }])
      if id
        scope.find id
      elsif date
        scope.find_by(date: date)
      else
        nil
      end
    end
  end
end
