require 'json'

module ExerciseSeed
  MEASUREMENT_DEFAULTS = {
    weight: { min: 0, max: 500, step: 2.5, unit: 'kg', more_is_better: true },
    reps: { min: 0, max: 100, step: 1, unit: 'reps', more_is_better: true },
    duration: { min: 0, max: 3600, step: 1, unit: 'sec', more_is_better: false },
    speed: { min: 0, max: 30, step: 0.1, unit: 'km/h', more_is_better: true },
    distance: { min: 0, max: 100, step: 0.01, unit: 'km', more_is_better: true }
  }

  def self.load_exercises
    data = JSON.parse(File.read(File.join(__dir__, 'exercisesAnimatic.json')))

    data.transform_values do |entry|
      name = entry['name']
      category = entry['category']
      muscle_areas = entry['muscleAreas']

      has_weight_measurement = ['Resistance', 'Free Weights'].include?(category) && !name.include?('Bodyweight')
      has_duration_measurement = muscle_areas.include?('Cardio') || name.include?('Hold')
      is_cardio = muscle_areas.include?('Cardio')
      has_reps_measurement = !has_duration_measurement

      exercise_data = {
        name: name,
        equipment: [entry['equipment']].compact,
        images: entry['images'],
        instructions: entry['instructions'],
        muscles: entry['muscles'],
        muscle_areas: muscle_areas,
        position: entry['position'],
        stance: entry['stance'],
        tips: entry['tips']
      }

      # Add exercise measurements
      exercise_data[:exercise_measurements_attributes] = []

      if has_reps_measurement
        exercise_data[:exercise_measurements_attributes] << {
          measurement_type: 'reps',
          unit: MEASUREMENT_DEFAULTS[:reps][:unit],
          more_is_better: MEASUREMENT_DEFAULTS[:reps][:more_is_better],
          min_value: MEASUREMENT_DEFAULTS[:reps][:min],
          max_value: MEASUREMENT_DEFAULTS[:reps][:max]
        }
      end

      if has_weight_measurement
        exercise_data[:exercise_measurements_attributes] << {
          measurement_type: 'weight',
          unit: MEASUREMENT_DEFAULTS[:weight][:unit],
          more_is_better: MEASUREMENT_DEFAULTS[:weight][:more_is_better],
          step_value: MEASUREMENT_DEFAULTS[:weight][:step],
          min_value: MEASUREMENT_DEFAULTS[:weight][:min],
          max_value: MEASUREMENT_DEFAULTS[:weight][:max]
        }
      end

      if has_duration_measurement
        exercise_data[:exercise_measurements_attributes] << {
          measurement_type: 'duration',
          unit: MEASUREMENT_DEFAULTS[:duration][:unit],
          more_is_better: MEASUREMENT_DEFAULTS[:duration][:more_is_better],
          min_value: MEASUREMENT_DEFAULTS[:duration][:min],
          max_value: MEASUREMENT_DEFAULTS[:duration][:max]
        }
      end

      if is_cardio
        exercise_data[:exercise_measurements_attributes] << {
          measurement_type: 'speed',
          unit: MEASUREMENT_DEFAULTS[:speed][:unit],
          more_is_better: MEASUREMENT_DEFAULTS[:speed][:more_is_better],
          min_value: MEASUREMENT_DEFAULTS[:speed][:min],
          max_value: MEASUREMENT_DEFAULTS[:speed][:max]
        }

        exercise_data[:exercise_measurements_attributes] << {
          measurement_type: 'distance',
          unit: MEASUREMENT_DEFAULTS[:distance][:unit],
          more_is_better: MEASUREMENT_DEFAULTS[:distance][:more_is_better],
          min_value: MEASUREMENT_DEFAULTS[:distance][:min],
          max_value: MEASUREMENT_DEFAULTS[:distance][:max]
        }
      end

      exercise_data
    end
  end

  def self.exercises
    @exercises ||= load_exercises
  end
end
