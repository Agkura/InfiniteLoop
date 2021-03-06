# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170627220429) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.text     "body",        null: false
    t.integer  "author_id",   null: false
    t.integer  "question_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["author_id", "question_id"], name: "index_answers_on_author_id_and_question_id", unique: true, using: :btree
    t.index ["author_id"], name: "index_answers_on_author_id", using: :btree
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
  end

  create_table "high_scores", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "highscores", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "score",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "question_votes", force: :cascade do |t|
    t.integer  "author_id",               null: false
    t.integer  "question_id",             null: false
    t.integer  "score",       default: 0, null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["author_id", "question_id"], name: "index_question_votes_on_author_id_and_question_id", unique: true, using: :btree
    t.index ["author_id"], name: "index_question_votes_on_author_id", using: :btree
    t.index ["question_id"], name: "index_question_votes_on_question_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_questions_on_author_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "votes", force: :cascade do |t|
    t.integer  "status",     default: 0, null: false
    t.integer  "author_id",              null: false
    t.integer  "answer_id",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["answer_id"], name: "index_votes_on_answer_id", using: :btree
    t.index ["author_id", "answer_id"], name: "index_votes_on_author_id_and_answer_id", unique: true, using: :btree
    t.index ["author_id"], name: "index_votes_on_author_id", using: :btree
  end

end
