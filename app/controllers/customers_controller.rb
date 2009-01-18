class CustomersController < ApplicationController
  before_filter :login_required
  
  def index
    @customer = Customer.new
    
  end
end
