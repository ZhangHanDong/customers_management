class CreateCustomers < ActiveRecord::Migration
  def self.up
    create_table (:customers, :id => false, :options => 'ENGINE=InnoDB DEFAULT CHARSET=utf8') do |t|
      t.string   :id, :limit => 36,  :null=>false
      t.string   :first_name
      t.string   :first_name_py
      t.string   :last_name
      t.string   :last_name_py
      t.string   :title
      t.string   :title_py
      t.string   :notes
      t.string   :account_num
      t.string   :company
      t.string   :company_py
      
      t.datetime :created_at
      t.datetime :updated_at
    end
    
    add_index :customers, :id, :primary=>true, :unique=>true
  end

  def self.down
    drop_table :customers
  end
end
