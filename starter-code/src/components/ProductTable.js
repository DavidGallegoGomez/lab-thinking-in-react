import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render () {
    //const {products} = this.props
    console.log( { TABLE: this.props.products.data })
    const productsList = this.props.products.data.map( (product, i) => (
      <div className="col-4 mb-4" key={i}>
        <ProductRow product={product} />
      </div>
    ))

    return(
      <div>
        { productsList }
      </div>
    )
  }
}

export default ProductTable