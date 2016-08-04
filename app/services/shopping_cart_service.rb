class ShoppingCartService
    def initialize(cart)
        @cart = cart
    end

    def finalize
      if @cart.in_progress? && (@cart.subtotal > 200)
        apply_discount
        @cart.completed!
        @cart.save
      else
        false
      end
    end

    def apply_discount
        discount = 0
        if @cart.subtotal > 500
            discount = case @cart.subtotal
            when 500.01..600 then 0.05
            when 600.01..700 then 0.1
            else 0.15
            end
        end
        @cart.discount = discount
        @cart.total = @cart.subtotal - (discount * @cart.subtotal)
    end

end
