class CustomersController < ApplicationController
  before_filter :login_required
  
  def index
    @customer = Customer.new
    @customers = Customer.find(:all, :order => "id DESC")
    @customer.contact_datas.build
    respond_to do |format|
      format.html
      format.js{ render :json => @customers.to_json(:include => :contact_datas)
       }
    end
  end
  
  def create
    if request.post?
      Customer.new.contact_datas.build
      @customer = Customer.new( params[:customer] )
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
  
  def formauthenticitytoken
    render :text=>form_authenticity_token
  end
end
