class Customer < ActiveRecord::Base
  set_primary_key "uuid"
  
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
  
  validates_presence_of :first_name, :last_name
  
  def contact_data=(datas)
    datas.each do |data|
      # phone numbers
      unless datas["phone_numbers"].blank?
        datas.delete("phone_numbers").each do |phone_number|
          phones.build(:location => phone_number["location"], :phone => phone_number["phone"]) unless phone_number["phone"].blank?
        end
      end
      
      # email addresses
      unless datas["email_addresses"].blank?
        datas.delete("email_addresses").each do |email_address|
          email_addresses.build(:location => email_address["location"], :email => email_address["email"]) unless email_address["email"].blank?
        end
      end
      
      #addresses
      unless datas["addresses"].blank?
        datas.delete("addresses").each do |address|
          address["city"]   = "" if address["city"] == "City"
          address["zip"]    = "" if address["zip"]  == "Zip"
          address["street"] = "" if address["street"] == "Street"
          address["state"]  = "" if address["state"]  == "State"
          unless (address["city"].blank? && address["zip"].blank? && address["street"].blank? && address["state"])
            addresses.build(:location => address["location"],:city => address["city"], :zip => address["zip"],
                          :country => address["country"], :street => address["street"], :state => address["state"])
          end
        end
      end
      
      #web_addresses
      unless datas["web_addresses"].blank?
        datas.delete("web_addresses").each do |web_address|
          websites.build(:location => web_address["location"], :website => web_address["website"]) unless web_address["website"].blank?
        end
      end
      
      #instant_messagers
      unless datas["instant_messagers"].blank?
        datas.delete("instant_messagers").each do |instant_messager|
          instant_messages.build(:location => instant_messager["location"], :protocol => instant_messager["protocol"], :instant_message => instant_messager["instant_message"]) unless instant_messager["instant_message"].blank?
        end
      end
      
      #resellers
      unless datas["resellers"].blank?
        datas.delete("resellers").each do |reseller|
          reseller["reseller_name"] = '' if reseller["reseller_name"] == "Reseller Name"
          reseller["reseller_mobile"] = '' if reseller["reseller_mobile"] == "Reseller Mobile"
          reseller["reseller_company"] = '' if reseller["reseller_company"] == "Reseller Company"
          
          unless (reseller["reseller_name"].blank? && reseller["reseller_mobile"].blank? && reseller["reseller_company"].blank?)
            resellers.build(:reseller_name => reseller["reseller_name"], :reseller_mobile => reseller["reseller_mobile"], :reseller_company => reseller["reseller_company"])
          end
        end
      end
      
      #urban_areas
      unless datas["urban_areas"].blank?
        datas.delete("urban_areas").each do |urban_area|
          urban_areas.build(:urban_area => urban_area["urban_area"]) unless urban_area["urban_area"].blank?
        end
      end
      
      #red_ones
      unless datas["red_ones"].blank?
        datas.delete("red_ones").each do |red_one|
          red_one["quotes"] = "" if red_one["quotes"] == "Quote"
          red_one["serial_num"] ="" if red_one["serial_num"] == "Serial Number"
          unless(red_one["quotes"].blank? && red_one["serial_num"].blank?)
            redones.build(:quotes => red_one["quotes"], :serial_num => red_one["serial_num"])
          end
        end
      end
      
      #clients
      unless datas["clients"].blank?
        datas.delete("clients").each do |client|
          client["client_name"] ='' if client["client_name"] == 'Client Name'
          client["client_mobile"] ='' if client["client_mobile"] == 'Client Mobile'
          unless (client["client_name"].blank? && client["client_mobile"].blank?) 
            clients.build(:client_name => client["client_name"], :client_mobile => client["client_mobile"])
          end
        end
      end
    end#datas block end
  end
end
