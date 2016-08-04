class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_shopping_cart
      if session[:cart_id].present?
        begin
          cart = ShoppingCart.find(session[:cart_id])
        rescue ActiveRecord::RecordNotFound
          ShoppingCart.new
        end
      else
          ShoppingCart.new
      end
  end

end
