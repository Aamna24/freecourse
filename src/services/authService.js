import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import jwtDecode from 'jwt-decode'

const apiPoint = "/users/login/"
const tokenKey = "token"

export async function login(email, password) {
    const {data: jwt} = await http.post(apiPoint, { email, password });
    localStorage.setItem(tokenKey, jwt.token);
    
}

const apiURL="/users/registerDetails"
export async function regDetails(firstName, lastName,email,mobile) {
    return http.post(apiURL, {firstName, lastName,email,mobile});
    
    
}

const apiPoint1 = "/form/submit"
export function submitForm(data){
    return http.post(apiPoint1,data)
}

const apiPoint2 = "/form/ids"
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

const coursePoint = "/course/";
export function getCourse() {
  return http.get(coursePoint);
}

const forms = "/form/";
export function getForm() {
  return http.get(forms);
}

const incForm = "/form/incompleteForms/";
export function getIncompleteForms() {
  return http.get(incForm);
}
export default{
    login,
    logout,
    getCurrentUser,
    submitForm,
    uploadID,
    regDetails,
    getCourse,
    getForm,
    getIncompleteForms
}