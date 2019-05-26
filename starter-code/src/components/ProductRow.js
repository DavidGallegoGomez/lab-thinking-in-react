import React from 'react'

class ProductRow extends React.Component {
  render () {
    const {product} = this.props
    console.log( { ROW: this.props })
    return(
      <div>
        <span>{product.name}</span>
        <span>{product.price}</span>
    </div>
    )
  }
}

export default ProductRow