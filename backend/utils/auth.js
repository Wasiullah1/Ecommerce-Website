// utils/auth.js
import axios from 'axios';

export const fetchUserProfile = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/api/users/profile', {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return null;
  }
};
