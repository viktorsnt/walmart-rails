/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import products from './modules/Product/ProductReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  products,
});
