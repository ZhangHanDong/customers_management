class CreateContactDatas < ActiveRecord::Migration
  def self.up
    create_table (:contact_datas, :id => false, :options => 'ENGINE=InnoDB DEFAULT CHARSET=utf8') do |t|
      t.string   :id, :limit => 36, :null=>false
      t.integer  :customer_id, :null=>false
      t.string   :type, :null=>false
      t.string   :location
      
      t.string   :website
            
      t.decimal  :quotes,  :precision => 10, :scale => 2
      t.string   :serial_num
      
      t.string   :email
      
      t.string   :phone
      
      t.string   :instant_message
      t.string   :protocol
      
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
      
      t.string   :street
      t.string   :city
      t.string   :city_py
      t.string   :state
      t.string   :state_py
      t.string   :zip
      t.string   :country
      
      t.datetime :created_at
      t.datetime :updated_at
    end
    
    add_index :contact_datas, :id, :primary=>true, :unique=>true
  end

  def self.down
    drop_table :contact_datas
  end
end
