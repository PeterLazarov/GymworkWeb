# frozen_string_literal: true

module Mutations
  class UpdateSettingsMutation < BaseMutation
    graphql_name "UpdateSettings"
    description "Update application settings"

    argument :theme, String, required: false, description: "Theme preference (light/dark)"
    argument :scientific_muscle_names_enabled, Boolean, required: false, description: "Whether to use scientific muscle names"
    argument :show_set_completion, Boolean, required: false, description: "Whether to show set completion UI"
    argument :preview_next_set, Boolean, required: false, description: "Whether to preview the next set"
    argument :measure_rest, Boolean, required: false, description: "Whether to measure rest time between sets"
    argument :show_comments_card, Boolean, required: false, description: "Whether to show comments card"
    argument :show_workout_timer, Boolean, required: false, description: "Whether to show workout timer"

    field :settings, Types::SettingsType, null: true
    field :errors, [String], null: false

    def resolve(**attributes)
      settings = Settings.first_or_create!

      if settings.update(attributes)
        {
          settings: settings,
          errors: []
        }
      else
        {
          settings: nil,
          errors: settings.errors.full_messages
        }
      end
    end
  end
end
