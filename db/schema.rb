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

ActiveRecord::Schema.define(:version => 20090118231136) do

  create_table "contact_datas", :force => true do |t|
    t.integer  "customer_id"
    t.string   "type"
    t.string   "location"
    t.string   "website"
    t.decimal  "quotes",              :precision => 10, :scale => 2
    t.string   "serial_num"
    t.string   "email"
    t.string   "phone"
    t.string   "instant_message"
    t.string   "protocol"
    t.string   "urban_area"
    t.string   "urban_area_py"
    t.string   "reseller_company"
    t.string   "reseller_company_py"
    t.string   "reseller_name"
    t.string   "reseller_name_py"
    t.string   "reseller_mobile"
    t.string   "client_name"
    t.string   "client_name_py"
    t.string   "client_mobile"
    t.string   "street"
    t.string   "city"
    t.string   "city_py"
    t.string   "state"
    t.string   "state_py"
    t.string   "zip"
    t.string   "country"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "customers", :force => true do |t|
    t.string   "first_name"
    t.string   "first_name_py"
    t.string   "last_name"
    t.string   "last_name_py"
    t.string   "title"
    t.string   "title_py"
    t.string   "notes"
    t.string   "account_num"
    t.string   "company"
    t.string   "company_py"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "login",                     :limit => 40
    t.string   "name",                      :limit => 100, :default => ""
    t.string   "email",                     :limit => 100
    t.string   "crypted_password",          :limit => 40
    t.string   "salt",                      :limit => 40
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "remember_token",            :limit => 40
    t.datetime "remember_token_expires_at"
  end

  add_index "users", ["login"], :name => "index_users_on_login", :unique => true

end
