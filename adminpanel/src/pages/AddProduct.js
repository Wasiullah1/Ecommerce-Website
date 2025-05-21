import React, { useState } from 'react';
import '../styles/AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    brand: '',
    countInStock: '',
    image: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
    const productData = {
      name: product.name,
      description: product.description,
      price: Number(product.price),
      image: product.image,
      brand: product.brand,
      category: product.category,
      countInStock: Number(product.countInStock),
    };


      const { data } = await axios.post(
        'http://localhost:5000/api/products',
        productData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      alert('Product added successfully');
      setProduct({
        name: '',
        price: '',
        description: '',
        category: '',
        brand: '',
        countInStock: '',
        image: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert(
        error?.response?.data?.message || 'Something went wrong while adding product.'
      );
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" placeholder="Name" value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })} />

      <input type="text" placeholder="Brand" value={product.brand}
        onChange={(e) => setProduct({ ...product, brand: e.target.value })} />

      <input type="text" placeholder="Category" value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })} />

      <input type="text" placeholder="Image URL" value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })} />

      <textarea placeholder="Description" value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })} />

      <input type="number" placeholder="Price" value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })} />

      <input type="number" placeholder="Stock Count" value={product.countInStock}
        onChange={(e) => setProduct({ ...product, countInStock: e.target.value })} />

      <button type="submit">Add Product</button>
    </form>
    </div>
  );
};

export default AddProduct;
