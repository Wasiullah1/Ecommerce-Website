import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/Category.css';
import { useNavigate } from 'react-router-dom';

const Category  = () => {
  const { category } = useParams(); // e.g., "Drinks"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/products', {
          params: { category },
        });
        setProducts(data);
      } catch (err) {
        console.error('Error fetching category products:', err);
      }
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div>
    <h2>Products By Category</h2>
    <div className="product-list">
     
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))
      )}
    </div>
    </div>
  );
};
// const Category = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = (category) => {
//     navigate(`/products?category=${category}`);
//   };

//   return (
//     <div className="category-page">
//       <h2>Shop by Category</h2>
//       <div className="category-list">
//         {categories.map((cat) => (
//           <div
//             className="category-card"
//             key={cat.name}
//             onClick={() => handleCategoryClick(cat.name)}
//           >
//             <img src={cat.image} alt={cat.name} />
//             <h4>{cat.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Category;
