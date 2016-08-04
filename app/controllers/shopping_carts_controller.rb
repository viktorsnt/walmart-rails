class ShoppingCartsController < ApplicationController

  # GET /checkout/1
  # GET /checkout/1.json
  def checkout
    @shopping_cart = ShoppingCart.find(params[:id])
    if @shopping_cart.in_progress?
        redirect_to '/'
    end
  end

  # GET /carrinho
  def cart
    @cart_items = current_shopping_cart.cart_items
  end

  def check_out
    service = ShoppingCartService.new(current_shopping_cart)
    @cart = current_shopping_cart
    if service.finalize
      session[:cart_id] = nil
      redirect_to "/checkout/#{@cart.id}"
    else
      redirect_to '/carrinho'
    end
  end

end
