class CartItemsController < ApplicationController
    def update
        cart_item = CartItem.find(params[:id])
        cart_item_params = params.require(:cart_item).permit(:quantity)
        # current_shopping_cart.save
        respond_to do |format|
            if cart_item.update(cart_item_params)
                current_shopping_cart.save
                format.json { render json: {cart_item: cart_item, cart: current_shopping_cart}, status: :ok }
            else
                format.json { render json: cart_item.errors, status: :unprocessable_entity }
            end
        end
    end
    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
    end
end
