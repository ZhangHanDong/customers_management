# SafeERB

require 'erb'
require 'action_controller'
require 'action_view'

class ActionController::Base
  # Object#taint is set when the request comes from FastCGI or WEBrick,
  # but it is not set in Mongrel and also functional / integration testing
  # so we'll set it anyways in the filter
  before_filter :taint_request
  
  def render_with_checking_tainted(*args, &blk)
    if @skip_checking_tainted
      render_without_checking_tainted(*args, &blk)
    else
      ERB.with_checking_tainted do
        render_without_checking_tainted(*args, &blk)
      end
    end
  end

  alias_method_chain :render, :checking_tainted

  private
  
  def taint_hash(hash)
    hash.each do |k, v|
      case v
      when String
        v.taint
      when Hash
        taint_hash(v)
      end
    end
  end
  
  def taint_request
    taint_hash(params)
    cookies.each do |k, v|
      v.taint
    end
  end
end

class String
  def concat_unless_tainted(str)
    raise "attempted to output tainted string: #{str}" if str.is_a?(String) && str.tainted?
    concat(str)
  end
end
