json.extract! product, :id, :name, :image, :brand, :seller, :list_price, :best_price, :quantity, :created_at, :updated_at
json.url product_url(product, format: :json)