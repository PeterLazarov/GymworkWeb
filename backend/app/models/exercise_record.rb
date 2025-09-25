class ExerciseRecord < ApplicationRecord
  self.primary_key = :record_id

  belongs_to :exercise

  def readonly?
    true
  end
end
