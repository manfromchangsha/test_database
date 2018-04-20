import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(res => this.setState({products: res.data}))
      .catch(err => console.log(err))
      //.then(res => this.set.state({products: res.data}, () => console.log('Products fetched...', products)))
  }

  renderProduct = ({UserID, LoginName}) => <div key={UserID}>{LoginName}</div>

  render() {
    return (
      <div>
        <h2>Products</h2>
        {this.state.products.map(this.renderProduct)}
      </div>
    );
  }
}

export default Customers;
