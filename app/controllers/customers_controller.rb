class CustomersController < ApplicationController
  before_filter :login_required
  
  def index
    @customer = Customer.new
    @customers = Customer.find(:all, :order => "id DESC")
    @customer.contact_datas.build
  end
  
  def create
    @customer = Customer.new
    @customer.contact_datas.build
    if request.post?
      @customer = Customer.new( params[:customer])
      # :company => params[:customer][:company],
      #                           :title   => params[:customer][:title],
      #                           :first_name => params[:customer][:first_name],
      #                           :last_name  => params[:customer][:last_name]
      respond_to do |format|
        if @customer.save
            format.html{
              flash[:notice] = " Customer has been Saved! "
              redirect_to :controller => "customers"
            }
            format.js{ 
              render :partial => @customer
              flash[:notice] = " Customer has been Saved Successful! "
            }
        else
          format.html{ render :action => "edit" }
          format.js{
            flash[:error]  = "Verification failed: #{@customer.errors.full_messages}"
          }
        end

      end
    end
  end
end
