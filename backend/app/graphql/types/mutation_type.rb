# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_workout, mutation: Mutations::CreateWorkoutMutation
    field :copy_workout, mutation: Mutations::CopyWorkoutMutation
    field :delete_workout, mutation: Mutations::DeleteWorkoutMutation
    field :update_workout, mutation: Mutations::UpdateWorkoutMutation
    field :create_workout_template, mutation: Mutations::CreateWorkoutTemplateMutation

    field :create_exercise, mutation: Mutations::CreateExerciseMutation
    field :delete_exercise, mutation: Mutations::DeleteExerciseMutation
    field :update_exercise, mutation: Mutations::UpdateExerciseMutation

    field :add_set, mutation: Mutations::AddSetMutation
    field :delete_set, mutation: Mutations::DeleteSetMutation
    field :update_set, mutation: Mutations::UpdateSetMutation

    field :add_step, mutation: Mutations::AddStepMutation
    field :delete_step, mutation: Mutations::DeleteStepMutation

    field :update_settings, mutation: Mutations::UpdateSettingsMutation
  end
end
