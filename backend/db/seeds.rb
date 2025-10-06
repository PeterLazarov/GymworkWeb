require_relative 'exercise_seed'
require_relative 'workout_seed'

puts "Creating exercises..."
# First create all exercises and store their IDs
ExerciseSeed.exercises.each do |id, exercise_data|
  Exercise.create!(
    id: id,  # Use the UUID from the JSON data
    name: exercise_data[:name],
    equipment: exercise_data[:equipment],
    images: exercise_data[:images],
    instructions: exercise_data[:instructions],
    muscles: exercise_data[:muscles],
    muscle_areas: exercise_data[:muscle_areas],
    position: exercise_data[:position],
    stance: exercise_data[:stance],
    tips: exercise_data[:tips],
    exercise_measurements_attributes: exercise_data[:exercise_measurements_attributes] || []
  )
end

puts "Exercises created successfully!"
puts "Creating workouts..."

# Make exercise_map available to WorkoutSeed
WorkoutSeed.generate_workouts.each do |workout_data|
  workout = Workout.create!(
    date: workout_data[:date],
    notes: workout_data[:notes],
    feeling: workout_data[:feeling],
    pain: workout_data[:pain],
    rpe: workout_data[:rpe]
  )

  workout_data[:steps].each do |step_data|
    step = WorkoutStep.create!(
      workout: workout,
      step_type: step_data[:type],
      exercises: Exercise.where(id: step_data[:exercises])
    )

    step_data[:sets].each do |set_data|
      WorkoutSet.create!(
        workout_step: step,
        exercise_id: set_data[:exercise],
        is_warmup: set_data[:is_warmup],
        reps: set_data[:reps],
        weight_mcg: set_data[:weight_mcg],
        distance_mm: set_data[:distance_mm],
        duration_ms: set_data[:duration_ms],
        rest_ms: set_data[:rest_ms],
        date: workout.date,
        created_at: Time.at(set_data[:created_at] / 1000.0)
      )
    end
  end
end
