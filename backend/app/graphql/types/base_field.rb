# frozen_string_literal: true

module Types
  class BaseField < GraphQL::Schema::Field
    argument_class Types::BaseArgument

    def initialize(*args, preload: nil, **kwargs, &block)
      @preload_config = preload
      super(*args, **kwargs, &block)
    end

    def resolve(object, arguments, context)
      if @preload_config && object.object.is_a?(ActiveRecord::Base)
        associations_to_preload = []

        case @preload_config
        when Symbol, String
          associations_to_preload << @preload_config unless object.object.association(@preload_config.to_sym).loaded?
        when Array
          @preload_config.each do |assoc|
            associations_to_preload << assoc unless object.object.association(assoc.to_sym).loaded?
          end
        when Hash
          @preload_config.each do |assoc, _nested|
            associations_to_preload << {assoc => _nested} unless object.object.association(assoc.to_sym).loaded?
          end
        end

        if associations_to_preload.any?
          ActiveRecord::Associations::Preloader.new(
            records: [object.object],
            associations: associations_to_preload
          ).call
        end
      end

      super
    end
  end
end
