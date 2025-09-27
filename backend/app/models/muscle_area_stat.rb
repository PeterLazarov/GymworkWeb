# frozen_string_literal: true

class MuscleAreaStat < ApplicationRecord
  # This is a read-only model backed by a view
  self.primary_key = :muscle_area

  def readonly?
    true
  end
end
