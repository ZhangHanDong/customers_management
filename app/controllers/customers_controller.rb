class CustomersController < ApplicationController
  before_filter :login_required
  
  def index
    @customer = Customer.new
    2.times{ @customer.contact_datas.build }
  end
  
  def create
    if request.post?
      @customer = Customer.new( :company => params[:customer][:company],
                                :title   => params[:customer][:title],
                                :first_name => params[:customer][:first_name],
                                :last_name  => params[:customer][:last_name] )
      respond_to do |format|
        format.html{
          if @customer.save
            flash[:notice] = " Customer has been Saved! "
            redirect_to :controller => "customers"
          else
            render :action => "edit"
          end
        }
        
        format.js{
          if @customer.save
            flash[:notice] = " Customer has been Saved Successful! "
          else
            flash[:error]  = "Verification failed: #{@customer.errors.full_messages}"
          end
        }
      end
    end
  end
end
