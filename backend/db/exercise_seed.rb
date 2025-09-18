require 'json'

module ExerciseSeed
  MEASUREMENT_DEFAULTS = {
    weight: { min: 0, max: 500, step: 2.5, unit: 'kg' },
    reps: { min: 0, max: 100, step: 1 },
    duration: { min: 0, max: 3600, step: 1, unit: 'sec' },
    speed: { min: 0, max: 30, step: 0.1, unit: 'km/h' },
    distance: { min: 0, max: 100, step: 0.01, unit: 'km' }
  }

  def self.load_exercises
    data = JSON.parse(File.read(File.join(__dir__, 'exercisesAnimatic.json')))

    data.transform_values do |entry|
      name = entry['name']
      category = entry['category']
      muscle_areas = entry['muscleAreas']

      # Determine which measurements to include
      has_weight_measurement = ['Resistance', 'Free Weights'].include?(category) && !name.include?('Bodyweight')
      has_duration_measurement = muscle_areas.include?('Cardio') || name.include?('Hold')
      is_cardio = muscle_areas.include?('Cardio')

      measurements = {
        weight: has_weight_measurement ? MEASUREMENT_DEFAULTS[:weight] : nil,
        reps: MEASUREMENT_DEFAULTS[:reps],
        duration: has_duration_measurement ? MEASUREMENT_DEFAULTS[:duration] : nil,
        speed: is_cardio ? MEASUREMENT_DEFAULTS[:speed] : nil,
        distance: is_cardio ? MEASUREMENT_DEFAULTS[:distance] : nil
      }.compact


      {
        name: name,
        equipment: [entry['equipment']].compact,
        images: entry['images'],
        instructions: entry['instructions'],
        muscles: entry['muscles'],
        muscle_areas: muscle_areas,
        position: entry['position'],
        stance: entry['stance'],
        measurements: measurements,
        tips: entry['tips']
      }
    end
  end

  def self.exercises
    @exercises ||= load_exercises
  end
end
