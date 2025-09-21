require_relative 'exercise_seed'

module WorkoutSeed
  NUMBER_OF_WORKOUTS = 20
  WEIGHT_INCREMENT_KG = 2.5
  SET_DURATION = 100 * 1000 # milliseconds
  REST_DURATION = 300 * 1000 # milliseconds

  class << self
    def between(min, max)
      rand(min..max)
    end

    def find_exercise_by_name(name)
      ExerciseSeed.exercises.values.find { |e| e[:name].downcase.include?(name.downcase) }
    end

    def bench_press_id
      @bench_press_id ||= begin
        exercise = Exercise.find_by(name: 'Barbell Bench Press Close Grip')
        exercise.id if exercise
      end
    end

    def squat_id
      @squat_id ||= begin
        exercise = Exercise.find_by(name: 'Barbell Back Squat')
        exercise.id if exercise
      end
    end

    def cardio_exercise_id
      @cardio_exercise_id ||= begin
        exercise = Exercise.find_by(muscle_areas: ['Cardio'])
        exercise.id if exercise
      end
    end

    def generate_step(exercises, sets)
      {
        exercises: exercises,
        sets: sets,
        type: exercises.length > 1 ? 'superSet' : 'straightSet'
      }
    end

    def generate_workout(date)
      workout_time = Time.parse(date).change(hour: 8)

      def generate_random_exercises(date, workout_time)
        Array.new(between(3, 8)) do |i|
          exercise = Exercise.offset(rand(Exercise.count)).first
          rest_ms = i > 0 ? REST_DURATION : 0
          workout_time += (rest_ms * i + SET_DURATION * i) / 1000.0

          sets = Array.new(between(2, 5)) do |j|
            {
              exercise: exercise.id,
              is_warmup: j == 0,
              reps: exercise.measurements.reps ? between(3, 12) : nil,
              weight_mcg: exercise.measurements.weight ? (between(8, 40) * WEIGHT_INCREMENT_KG * 1_000_000_000).to_i : nil,
              distance_mm: exercise.measurements.distance ? between(1, 10) * 1_000_000 : nil,
              duration_ms: exercise.measurements.duration ? between(1, 10) * 60 * 1000 : nil,
              speed_kph: exercise.measurements.speed ? between(1, 10) : nil,
              date: date,
              created_at: workout_time.to_i * 1000
            }
          end

          generate_step([exercise_id], sets)
        end
      end

      def generate_bench_step(date, workout_time)
        sets = Array.new(between(3, 5)) do |i|
          weight_mcg = (between(8, 40) * WEIGHT_INCREMENT_KG * 1_000_000_000).to_i
          rest_ms = i > 0 ? REST_DURATION : 0
          workout_time += (rest_ms * i + SET_DURATION * i) / 1000.0

          {
            exercise: bench_press_id,
            reps: between(3, 12),
            weight_mcg: weight_mcg,
            is_warmup: i == 0,
            date: date,
            rest_ms: rest_ms,
            created_at: workout_time.to_i * 1000
          }
        end

        generate_step([bench_press_id], sets)
      end

      def generate_cardio_step(date, workout_time)
        sets = Array.new(between(1, 2)) do
          km = between(1, 3)
          duration = km * between(4, 7)
          workout_time += duration * 60 # minutes to seconds

          {
            exercise: cardio_exercise_id,
            distance_mm: (km * 1_000_000).to_i, # km to mm
            duration_ms: (duration * 60 * 1000).to_i, # minutes to ms
            is_warmup: false,
            created_at: workout_time.to_i * 1000,
            date: date,
          }
        end

        generate_step([cardio_exercise_id], sets)
      end

      def generate_superset_step(date, workout_time)
        sets = Array.new(between(2, 3) * 2) do |i|
          weight_mcg = (between(8, 40) * WEIGHT_INCREMENT_KG * 1_000_000_000).to_i
          rest_ms = i > 0 ? REST_DURATION : 0
          workout_time += (rest_ms * i + SET_DURATION * i) / 1000.0

          {
            exercise: i.even? ? bench_press_id : squat_id,
            reps: between(3, 12),
            weight_mcg: weight_mcg,
            is_warmup: i == 0 || i == 1,
            date: date,
            rest_ms: rest_ms,
            created_at: workout_time.to_i * 1000
          }
        end

        generate_step([bench_press_id, squat_id], sets)
      end

      steps = generate_random_exercises(date, workout_time)
      bench_step = generate_bench_step(date, workout_time)
      cardio_step = generate_cardio_step(date, workout_time)
      superset_step = generate_superset_step(date, workout_time)

      {
        date: date,
        steps: steps.concat([bench_step, cardio_step, superset_step]).reverse,
        notes: Array.new(between(0, 20)) { 'word' }.join(' ').strip,
        feeling: ['sad', 'neutral', 'happy', nil][between(0, 3)],
        pain: ['pain', 'discomfort', 'noPain', nil][between(0, 3)],
        rpe: between(0, 1) == 1 ? between(5, 10) : nil
      }
    end

    def generate_workouts
      today = Date.today
      Array.new(NUMBER_OF_WORKOUTS) do |i|
        date = (today - i - i * (rand * 2).ceil).iso8601
        generate_workout(date)
      end
    end
  end
end
