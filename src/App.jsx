import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts = [
    {id: 1, name:"Laptop", price:"$999", inStock: true},
    {id: 2, name:"Phone", price:"$699", inStock: false},
    {id: 3, name:"Tablet", price: "$499", inStock: true}
  ]

  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState(null)
  const [productList, setProductList] = useState(initialProducts);


  // TODO: Implement logic to filter products based on availability
  const applyFilter = () => {
    setFilter(prev => !prev);
  }
  const displayProducts = filter ? productList.filter(product => product.inStock) : productList;
  const handleRemove = (id) => {
    setProductList(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={applyFilter}>Filter By Availability</button>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={displayProducts} onRemove={handleRemove}/>
      
    </div>
  );
};

export default App;
