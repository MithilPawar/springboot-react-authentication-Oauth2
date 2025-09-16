import API from "../api.js";

export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (credentials) =>{
    const response = await API.post('/auth/login', credentials);
    if(response.data.token){
        localStorage.setItem("token", response.data.token);
    }
    return response.data;
}

export const getUserProfile = async() =>{
    const response = await API.get('/user/profile');
    return response.data;
}