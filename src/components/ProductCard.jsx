import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove}) => {
  return (
    <div className={`${product.inStock ? styles.inStock : styles.outOfStockClass} ${styles.productCard}`}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <div>{product.name}</div>

      {/* TODO: Display product price */}
      <div>Product Price: {product.price}</div>

      {/* TODO: Show if the product is in stock or out of stock */}
      <div>{product.inStock? "In Stock":"Out of Stock"}</div>

      <button onClick={() => onRemove(product.id)}>Remove Item</button>
      
    </div>
  );
};

export default ProductCard;
