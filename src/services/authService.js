import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import jwtDecode from 'jwt-decode'

const apiPoint = "http://localhost:61500/users/login/"
const tokenKey = "token"

export async function login(email, password) {
    const {data: jwt} = await http.post(apiPoint, { email, password });
    localStorage.setItem(tokenKey, jwt.token);
    
}

const apiPoint1 = "http://localhost:61500/form/submit"
export function submitForm(data){
    return http.post(apiPoint1,data)
}

const apiPoint2 = "http://localhost:61500/form/ids"
export function uploadID(data){
    return http.post(apiPoint2,data)
    
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
    getCurrentUser,
    submitForm,
    uploadID
}