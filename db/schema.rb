# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110311235038) do

  create_table "desks", :force => true do |t|
    t.string   "nome"
    t.string   "imgicon"
    t.string   "imgbg"
    t.integer  "usuario_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "notes", :force => true do |t|
    t.string   "UUID"
    t.string   "conteudo"
    t.integer  "categoria",  :default => 0
    t.integer  "prioridade"
    t.string   "posX"
    t.string   "posY"
    t.string   "width"
    t.string   "height"
    t.boolean  "trashed",    :default => false
    t.boolean  "shared",     :default => false
    t.string   "state"
    t.string   "titulo"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "usuarios", :force => true do |t|
    t.string   "nome"
    t.string   "login"
    t.string   "email"
    t.string   "senha"
    t.integer  "nivel"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
