import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  render() {
    const {products} = this.props
    console.log( { MOTHER: this.props } )
    return (
      <div className="FilterableProductTable">
        <h1 className="title">IronStore</h1>
        <SearchBar/>
        <ProductTable products={products}/>
      </div>
    );
  }
}

export default FilterableProductTable