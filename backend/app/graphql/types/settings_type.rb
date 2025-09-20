# frozen_string_literal: true

module Types
  class SettingsType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :id, ID, null: false
    field :theme, String, null: false
    field :scientific_muscle_names_enabled, Boolean, null: false
    field :show_set_completion, Boolean, null: false
    field :preview_next_set, Boolean, null: false
    field :measure_rest, Boolean, null: false
    field :show_comments_card, Boolean, null: false
    field :show_workout_timer, Boolean, null: false
  end
end
