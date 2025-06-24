import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const fetchProducts = async () => {
   try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    return []; // return empty array on error to avoid app crash
  }
};
// export function fetchProducts(req, res) {
//   if (req.method === "GET") {
//     console.log("hello");
//     return res.status(200).json({ message: "Response" });
//   } else {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }
// }