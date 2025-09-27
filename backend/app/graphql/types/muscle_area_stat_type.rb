# frozen_string_literal: true

module Types
  class MuscleAreaStatType < Types::BaseObject
    field :muscle_area, String, null: false, description: 'The name of the muscle area'
    field :percentage, Float, null: false, description: 'Percentage of workouts that train this muscle area'
    field :workout_count, Integer, null: false, description: 'Number of workouts that train this muscle area'
    field :total_workouts, Integer, null: false, description: 'Total number of workouts'
  end
end
