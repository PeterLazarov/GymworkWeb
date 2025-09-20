# frozen_string_literal: true

module Resolvers
  class SettingsResolver < Resolvers::BaseResolver
    type Types::SettingsType, null: false

    def resolve
      Settings.first_or_create!
    end
  end
end
