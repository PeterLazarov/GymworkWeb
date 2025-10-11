# frozen_string_literal: true

class BackendSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # For batch-loading (see https://graphql-ruby.org/dataloader/overview.html)
  use GraphQL::Dataloader

  def self.type_error(err, context)
    Rails.logger.error "GraphQL error: #{err.message}"
    err
  end

  def self.resolve_type(_abstract_type, _obj, _ctx)
    case _obj
    when Workout
      Types::WorkoutType
    when WorkoutStep
      Types::WorkoutStepType
    when WorkoutSet
      Types::WorkoutSetType
    when Exercise
      Types::ExerciseType
    when Settings
      Types::SettingsType
    else
      raise(GraphQL::RequiredImplementationMissingError, "Unexpected object: #{_obj}")
    end
  end

  max_query_string_tokens(5000)

  validate_max_errors(100)

  # Relay-style Object Identification:

  # Return a string UUID for `object`
  def self.id_from_object(object, _type_definition, _query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(_type_definition.graphql_name, object.id)
  end

  def self.object_from_id(graphql_id, _query_ctx)
    type_name, id = GraphQL::Schema::UniqueWithinType.decode graphql_id

    model_class = get_model_from_type_name(type_name)
    model_class.find(id)
  end

  private

  def self.get_model_from_type_name(type_name)
    case type_name
    when 'WorkoutType'
      Workout
    when 'WorkoutStepType'
      WorkoutStep
    when 'WorkoutSetType'
      WorkoutSet
    when 'ExerciseType'
      Exercise
    when 'SettingsType'
      Settings
    else
      raise "Unknown type name: #{type_name}"
    end
  end
end
