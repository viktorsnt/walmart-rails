require 'test_helper'

class ShoppingCartsControllerTest < ActionController::TestCase
  setup do
    @shopping_cart = shopping_carts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shopping_carts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shopping_cart" do
    assert_difference('ShoppingCart.count') do
      post :create, shopping_cart: { discount: @shopping_cart.discount, status: @shopping_cart.status, subtotal: @shopping_cart.subtotal, total: @shopping_cart.total }
    end

    assert_redirected_to shopping_cart_path(assigns(:shopping_cart))
  end

  test "should show shopping_cart" do
    get :show, id: @shopping_cart
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shopping_cart
    assert_response :success
  end

  test "should update shopping_cart" do
    patch :update, id: @shopping_cart, shopping_cart: { discount: @shopping_cart.discount, status: @shopping_cart.status, subtotal: @shopping_cart.subtotal, total: @shopping_cart.total }
    assert_redirected_to shopping_cart_path(assigns(:shopping_cart))
  end

  test "should destroy shopping_cart" do
    assert_difference('ShoppingCart.count', -1) do
      delete :destroy, id: @shopping_cart
    end

    assert_redirected_to shopping_carts_path
  end
end
