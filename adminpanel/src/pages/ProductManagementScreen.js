import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/ProductManagementScreen.css';
import { useNavigate } from 'react-router-dom';

const ProductManagementScreen = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products');
        setProducts(data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  const handleDelete = async (id) => {
  if (!window.confirm('Delete this product?')) return;
  try {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  } catch (err) {
    alert('Failed to delete product');
  }
};

const handleEdit = (product) => {
  const name = prompt('New name:', product.name);
  const price = prompt('New price:', product.price);
  if (name && price) {
    axios
      .put(`http://localhost:5000/api/products/${product._id}`, { name, price })
      .then((res) => {
        setProducts(products.map((p) => (p._id === product._id ? res.data : p)));
      })
      .catch(() => alert('Failed to update product'));
  }
};



  return (
    <div className="product-management">
      <h2>📦 Product Management</h2>
      <button className="add-button" onClick={() => navigate('/add-product')}>
        + Add New Product
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td><img src={p.image} alt={p.name} height="50" /></td>
                <td>{p.name}</td>
                <td>{p.brand}</td>
                <td>{p.category}</td>
                <td>${p.price}</td>
                <td>{p.countInStock}</td>
                <td>
                <button className="edit-btn"
                    onClick={() => handleEdit(p)}>
                    Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(p._id)}>Delete</button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* <table className="product-table">
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
      </table> */}
    </div>
  );
};

export default ProductManagementScreen;
    