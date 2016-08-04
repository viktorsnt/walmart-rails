class CreateCartItems < ActiveRecord::Migration
  def change
    create_table :cart_items do |t|
      t.integer :quantity, default: 1
      t.float :total
      t.references :product, index: true, foreign_key: true
      t.references :shopping_cart, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
