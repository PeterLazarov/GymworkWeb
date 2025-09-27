# frozen_string_literal: true

module Resolvers
  class MuscleAreaStatsResolver < BaseResolver
    type [Types::MuscleAreaStatType], null: false

    argument :ascending, Boolean, required: false, default_value: false

    def resolve(ascending: false)
      return [] if Workout.count.zero?

      MuscleAreaStat.order(percentage: ascending ? :asc : :desc)
    end
  end
end
