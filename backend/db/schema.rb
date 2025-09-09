# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_09_08_111917) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "exercises", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "images", default: [], array: true
    t.string "equipment", default: [], array: true
    t.string "position"
    t.string "stance"
    t.string "instructions", default: [], array: true
    t.string "tips", array: true
    t.string "muscle_areas", default: [], array: true
    t.string "muscles", default: [], array: true
    t.jsonb "measurements", default: {"reps" => nil, "speed" => nil, "weight" => nil, "distance" => nil, "duration" => nil}
    t.boolean "is_favorite", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_exercises_on_name"
  end

  create_table "workout_sets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "workout_step_id", null: false
    t.uuid "exercise_id", null: false
    t.boolean "is_warmup", default: false, null: false
    t.date "date", null: false
    t.boolean "is_weak_ass_record", default: false, null: false
    t.integer "reps"
    t.bigint "weight_mcg"
    t.integer "distance_mm"
    t.integer "duration_ms"
    t.decimal "speed_kph", precision: 10, scale: 2
    t.integer "rest_ms"
    t.datetime "completed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date"], name: "index_workout_sets_on_date"
    t.index ["exercise_id"], name: "index_workout_sets_on_exercise_id"
    t.index ["is_weak_ass_record"], name: "index_workout_sets_on_is_weak_ass_record"
    t.index ["workout_step_id"], name: "index_workout_sets_on_workout_step_id"
  end

  create_table "workout_step_exercises", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "workout_step_id", null: false
    t.uuid "exercise_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_id"], name: "index_workout_step_exercises_on_exercise_id"
    t.index ["workout_step_id"], name: "index_workout_step_exercises_on_workout_step_id"
  end

  create_table "workout_steps", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "workout_id", null: false
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["workout_id"], name: "index_workout_steps_on_workout_id"
  end

  create_table "workouts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.date "date", null: false
    t.text "notes"
    t.string "feeling"
    t.string "pain"
    t.integer "rpe"
    t.datetime "ended_at"
    t.integer "duration_ms"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date"], name: "index_workouts_on_date"
  end

  add_foreign_key "workout_sets", "exercises"
  add_foreign_key "workout_sets", "workout_steps"
  add_foreign_key "workout_step_exercises", "exercises"
  add_foreign_key "workout_step_exercises", "workout_steps"
  add_foreign_key "workout_steps", "workouts"
end
