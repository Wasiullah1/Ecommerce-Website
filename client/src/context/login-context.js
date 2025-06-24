import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const loginContext = React.createContext({
    userLoginHandler: (email, password) => { },
    username: "",
    token: "",
})
export const LoginContextProvider = (props) => {
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentUserToken, setCurrentUserToken] = useState("");
    const userLoginHandlerFunction = async (email, password) => {
        
        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/users/login',
                { email, password },
                { withCredentials: true }
            );
            // localStorage.setItem('userInfo', JSON.stringify(data)); // Store user info
            // console.log(data)
            console.log("This is from the userContext: ", data)
            await data?.name && setCurrentUsername(() => data.name)
            await data?.token && setCurrentUserToken(() => data.token) 
                    
            // data && data._id ? navigate('/') : alert('No user data')
            // if (data && data._id) {
            //   navigate(`/user/${data._id}`);
            // } else {
            //   alert('Unexpected login response');
            // } // Redirect to the home page
            return data?.token; // return token if login is successful
        } catch (error) {
            // setError(error?.response?.data?.message || 'Login failed'); // Set error message
            console.log(error.message)
            return null;
        } finally {
            // setLoading(false); // Stop loading
        }
    }
    const loginContextValue = {
        userLoginHandler: userLoginHandlerFunction,
        username: currentUsername, 
        token: currentUserToken
    }
    return (
        <loginContext.Provider value={loginContextValue}>
            {props.children}
        </loginContext.Provider>
    )
}
export default loginContext;