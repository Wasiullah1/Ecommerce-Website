import React from 'react';
import '../styles/ProductManagementScreen.css';
import { useNavigate } from 'react-router-dom';

const ProductManagementScreen = () => {
  const navigate = useNavigate();
  const dummyProducts = [
    { id: 1, name: 'Zinger Burger', price: 4.99, stock: 120 },
    { id: 2, name: 'Pizza Slice', price: 2.49, stock: 85 },
    { id: 3, name: 'Cold Drink', price: 1.50, stock: 200 },
  ];

  return (
    <div className="product-management">
      <h2>📦 Product Management</h2>
      <button className="add-button" onClick={() => navigate('/products/new')}>
        + Add New Product
      </button>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <button className="edit-btn"
                    onClick={() =>
                        navigate(`/products/edit/${product.id}`, { state: { edit: true, product } })
                    }>
                    Edit
                </button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementScreen;
    