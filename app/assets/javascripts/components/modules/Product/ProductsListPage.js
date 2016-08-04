import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './ProductActions';
import { getProducts } from './ProductReducer';

class ProductsListPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        {
          this.props.products.map(product => (
            <li
              // product={product}
              key={product.cuid}
              // onDelete={() => props.handleDeletePost(post.cuid)}
            >
              {product.name} - {product.listPrice}
            </li>
          ))
        }
      </div>
    );
  }

}

// Actions required to provide data for this component to render in sever side.
ProductsListPage.need = [() => { return fetchProducts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    products: getProducts(state),
  };
}

ProductsListPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    seller: PropTypes.string,
    listPrice: PropTypes.number.isRequired,
    bestPrice: PropTypes.number,
    quantity: PropTypes.number.isRequired,
  })),
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ProductsListPage);
