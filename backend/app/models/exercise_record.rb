class ExerciseRecord < ApplicationRecord
  self.primary_key = :record_id

  belongs_to :exercise

  # This is a view, so we don't want to allow modifications
  def readonly?
    true
  end
end
