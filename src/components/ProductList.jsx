import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  // TODO: Check if the product list is empty and display a message if needed

  return (
    <div>
      {/* TODO: Iterate over the products array and render a ProductCard for each product */}
      {products.map(product => (
        <div key={product.id}>
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
