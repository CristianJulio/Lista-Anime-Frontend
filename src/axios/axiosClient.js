import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://animelistbackend.herokuapp.com/api",
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const setToken = (token) => {
  if(token)
    instance.defaults.headers.common['x-auth-token'] = token;
  else 
    delete instance.defaults.headers.common['x-auth-token'];
}

export default instance;