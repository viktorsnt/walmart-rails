class CartItem < ActiveRecord::Base
  belongs_to :product
  belongs_to :shopping_cart

  before_save :update_total

  private

  def update_total
    price = product.best_price.present? ? product.best_price : product.list_price
    self[:total] = price * self[:quantity]
  end

end
