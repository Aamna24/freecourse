import http from './httpService';
import { apiEndpoint } from '../config.json'

const apiPoint = apiEndpoint + "/admin/login"
console.log(apiPoint)

export function adminlogin(email, password) {
    return http.post(apiPoint, { email, password })
}
