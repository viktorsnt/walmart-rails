// Import Actions
import { PRODUCTS_FETCHED, ADD_PRODUCT } from './ProductActions';

// Initial State
const initialState = { data: [] };

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT :
      return {
        data: [action.product, ...state.data],
      };
    case PRODUCTS_FETCHED :
      return {
        data: action.products,
      };
    default:
      return state;
  }
};

// Get all posts
export const getProducts = state => state.products.data;

// export reducer
export default ProductReducer;
