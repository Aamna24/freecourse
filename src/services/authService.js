import http from './httpService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { apiEndpoint } from '../config.json'

const apiPoint = apiEndpoint + "/users/login"
console.log(apiPoint)

export function login(email, password) {
    return http.post(apiPoint, { email, password });
    
}
