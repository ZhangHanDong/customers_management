class Customer < ActiveRecord::Base
  has_many :contact_datas, :class_name => "ContactData", :foreign_key => "customer_id"
  has_many :websites, :class_name => "WebSite", :foreign_key => "customer_id"
  has_many :redones, :class_name => "RedOne", :foreign_key => "customer_id"
  has_many :email_addresses, :class_name => "EmailAddress", :foreign_key => "customer_id"
  has_many :phones, :class_name => "Phone", :foreign_key => "customer_id"
  has_many :instant_messages, :class_name => "InstantMessage", :foreign_key => "customer_id"
  has_many :urban_areas, :class_name => "UrbanArea", :foreign_key => "customer_id"
  has_many :resellers, :class_name => "Reseller", :foreign_key => "customer_id"
  has_many :clients, :class_name => "Client", :foreign_key => "customer_id"
  has_many :addresses, :class_name => "Address", :foreign_key => "customer_id"
  
  validates_presence_of :first_name
  
end
