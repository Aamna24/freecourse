import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import jwtDecode from 'jwt-decode'

const apiPoint = "https://consulting-backend.herokuapp.com/users/login"
const tokenKey = "token"

export async function login(email, password) {
    const {data: jwt} = await http.post(apiPoint, { email, password });
    localStorage.setItem(tokenKey, jwt.token);
    
}

export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);

       return jwtDecode(jwt);
       
      } catch (ex) {
        return null
      }
}
export default{
    login,
    logout,
    getCurrentUser
}