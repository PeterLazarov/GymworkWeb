# frozen_string_literal: true

module Resolvers
  class WorkoutsResolver < BaseResolver
    type [Types::WorkoutType], null: false

    argument :from_date, GraphQL::Types::ISO8601Date, required: false
    argument :to_date, GraphQL::Types::ISO8601Date, required: false
    argument :date, GraphQL::Types::ISO8601Date, required: false
    argument :feeling, String, required: false
    argument :pain, String, required: false

    def resolve(from_date: nil, to_date: nil, date: nil, feeling: nil, pain: nil)
      scope = Workout.all

      scope = scope.where("date >= ?", from_date) if from_date.present?
      scope = scope.where("date <= ?", to_date) if to_date.present?
      scope = scope.where(date: date) if date.present?
      scope = scope.where(feeling: feeling) if feeling.present?
      scope = scope.where(pain: pain) if pain.present?

      scope.order(date: :desc)
    end
  end
end
