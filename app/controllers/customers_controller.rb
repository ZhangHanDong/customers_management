class CustomersController < ApplicationController
  before_filter :login_required
  
  def index
    @customer = Customer.new
    2.times{ @customer.contact_datas.build }
  end
  
  def create
    puts params[:customer].inspect
    redirect_to :controller => 'customers'
  end
end
