# frozen_string_literal: true

module Resolvers
  class WorkoutsResolver < BaseResolver
    type Types::WorkoutType.connection_type, null: false

    argument :from_date, GraphQL::Types::ISO8601Date, required: false
    argument :to_date, GraphQL::Types::ISO8601Date, required: false
    argument :date, GraphQL::Types::ISO8601Date, required: false
    argument :feeling, String, required: false
    argument :pain, String, required: false
    argument :rpe, String, required: false
    argument :muscles, [String], required: false
    argument :muscle_areas, [String], required: false
    argument :notes, String, required: false

    def resolve(from_date: nil, to_date: nil, date: nil, feeling: nil, pain: nil, rpe: nil, muscles: nil, muscle_areas: nil, notes: nil)
      scope = Workout.includes(steps: [:exercises, { sets: :exercise }])

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
  end
end
