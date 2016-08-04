class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.string :brand
      t.string :seller
      t.float :list_price
      t.float :best_price
      t.integer :quantity, default: 1

      t.timestamps null: false
    end
  end
end
