class Product < ActiveRecord::Base
    has_many :cart_items
    validates_presence_of :name, :list_price
end
