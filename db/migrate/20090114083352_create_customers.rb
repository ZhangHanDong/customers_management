class CreateCustomers < ActiveRecord::Migration
  def self.up
    create_table :customers do |t|
      t.string   :first_name
      t.string   :first_name_py
      t.string   :last_name
      t.string   :last_name_py
      t.string   :title
      t.string   :title_py
      t.string   :notes
      t.decimal  :quotes,  :precision => 10, :scale => 2
      t.string   :email
      t.string   :phone
      t.string   :im
      t.string   :account_num
      t.string   :serial_num
      t.string   :city
      t.string   :city_py
      t.string   :province
      t.string   :province_py
      t.string   :company
      t.string   :company_py
      t.string   :urban_area
      t.string   :urban_area_py
      t.string   :reseller_company
      t.string   :reseller_company_py
      t.string   :reseller_name
      t.string   :reseller_name_py
      t.string   :reseller_mobile
      t.string   :client_name
      t.string   :client_name_py
      t.string   :client_mobile
      t.string   :post_code
      t.string   :website
      t.string   :address
      t.datetime :created_at
      t.datetime :updated_at
    end
  end

  def self.down
    drop_table :customers
  end
end
