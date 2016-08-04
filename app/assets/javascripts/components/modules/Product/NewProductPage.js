import React, { Component, PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import ProductForm from './ProductForm';
import * as ProductActions from './ProductActions';
// import { getProducts } from './ProductReducer';
import ProductsListPage from './ProductsListPage';

class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.dispatch(ProductActions.newProduct(data));
  }

  render() {
    return (
      <div>
        <ProductsListPage />
        <ProductForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewProductPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
// function mapStateToProps(state) {
//   return {
//     // showAddPost: getShowAddPost(state),
//     products: getProducts(state),
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ProductActions, dispatch);
// }

// export default connect(mapDispatchToProps)(NewProductPage);

// export default connect(mapStateToProps)(NewProductPage);
export default connect()(NewProductPage);
