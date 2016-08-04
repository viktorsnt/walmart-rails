import callApi from '../../util/apiCaller';

// Export Constants
export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED';
export const ADD_PRODUCT = 'ADD_PRODUCT';

// Export Actions
export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product,
  };
}

export function fetchedProducts(products) {
  return {
    type: PRODUCTS_FETCHED,
    products,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    return callApi('products').then(res => {
      dispatch(fetchedProducts(res.products));
    });
  };
}

export function newProduct(product) {
  return (dispatch) => {
    return callApi('products', 'post', {
      product,
    }).then(res => dispatch(addProduct(res.product)));
  };
}

export function fetchProduct(cuid) {
  return (dispatch) => {
    return callApi(`product/${cuid}`).then(res => dispatch(addProduct(res.product)));
  };
}
