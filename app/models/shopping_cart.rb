class ShoppingCart < ActiveRecord::Base
    has_many :cart_items

    before_save :update_subtotal

    enum status: { in_progress: 0, completed: 1 }

    def subtotal
        cart_items.collect { |item| item.total }.sum
    end

    private

    def update_subtotal
        self[:subtotal] = subtotal
    end
end
