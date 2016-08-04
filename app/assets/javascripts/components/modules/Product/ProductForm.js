import React, { Component, PropTypes } from 'react';

class ProductForm extends Component {

  // static defaultProps = {
  //   brand: 'Walmart',
  //   name: '',
  //   description: '',
  //   image: '',
  //   seller: '',
  //   bestPrice: 122.90,
  //   listPrice: 122.90,
  //   quantity: 1,
  // }

  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      name: 'Produto 1',
      description: '',
      image: '',
      seller: 'Walmart',
      listPrice: '124.90',
      bestPrice: '',
      quantity: 1,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  onChange(e) {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  submitForm(e) {
    e.preventDefault();
    const data = this.state;
    this.props.handleSubmit(data);
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitForm}>
        <div className="form-group">
          <label htmlFor="inputCnpj">Brand</label>
          <input ref="brand" type="text" className="form-control" id="inputCnpj" name="brand" placeholder="Brand" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input ref="name" type="text" className="form-control" id="inputName" name="name" placeholder="Name" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="inputSeller">Seller</label>
          <input ref="seller" type="text" className="form-control" id="inputSeller" name="seller" placeholder="" onChange={this.onChange} value={this.state.seller} />
        </div>
        <div className="form-group">
          <label htmlFor="inputListPrice">List Price</label>
          <input ref="listPrice" type="text" className="form-control" id="inputListPrice" name="listPrice" placeholder="" onChange={this.onChange} value={this.state.listPrice} />
        </div>
        <div className="form-group">
          <label htmlFor="inputBestPrice">Best Price</label>
          <input ref="bestPrice" type="text" className="form-control" id="inputBestPrice" name="bestPrice" placeholder="" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="inputDesc">Description</label>
          <input ref="description" type="text" className="form-control" id="inputDesc" name="description" placeholder="Descrição" onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="inputDesc">Quantity</label>
          <input ref="quantity" type="number" className="form-control" id="inputDesc" name="quantity" placeholder="Quantity" onChange={this.onChange} value={this.state.quantity} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Image</label>
          <input ref="" type="file" id="exampleInputFile" onChange={this.onChange} />
        </div>
        <button type="submit" className="btn btn-default">Salvar</button>
      </form>
      </div>
    );
  }

}

ProductForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ProductForm;
