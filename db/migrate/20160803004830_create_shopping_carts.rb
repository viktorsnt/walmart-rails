class CreateShoppingCarts < ActiveRecord::Migration
  def change
    create_table :shopping_carts do |t|
      t.integer :status, default: 0
      t.float :total
      t.float :subtotal
      t.float :discount

      t.timestamps null: false
    end
  end
end
