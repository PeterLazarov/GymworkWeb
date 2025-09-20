# frozen_string_literal: true

module Resolvers
  class ExercisesResolver < BaseResolver
    type Types::ExerciseType.connection_type, null: false

    argument :id, ID, required: false
    argument :is_favorite, Boolean, required: false
    argument :muscle_areas, [String], required: false
    argument :muscles, [String], required: false
    argument :equipment, [String], required: false
    argument :name, String, required: false

    def resolve(id: nil, is_favorite: nil, muscle_areas: nil, muscles: nil, equipment: nil, name: nil)
      scope = Exercise.all

      scope = scope.where(id:) if id.present?
      scope = scope.where(is_favorite:) unless is_favorite.nil?
      scope = scope.where("name ILIKE ?", "%#{name}%") if name.present?
      scope = scope.where("muscle_areas && ARRAY[?]::varchar[]", muscle_areas) if muscle_areas.present?
      scope = scope.where("muscles && ARRAY[?]::varchar[]", muscles) if muscles.present?
      scope = scope.where("equipment && ARRAY[?]::varchar[]", equipment) if equipment.present?

      scope.order(:name)
    end
  end
end
