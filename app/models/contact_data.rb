class ContactData < ActiveRecord::Base
  belongs_to :cutomer, :class_name => "Cutomer", :foreign_key => "cutomer_id"
end

class WebSite < ContactData
end

class RedOne < ContactData
end

class EmailAddress < ContactData
end

class Phone < ContactData
end

class InstantMessage < ContactData
end

class UrbanArea < ContactData
end

class Reseller < ContactData
end

class Client < ContactData
end

class Address < ContactData
end

