import http from './httpService';
import { apiEndpoint } from '../config.json'

const apiPoint = apiEndpoint + "/users/login"
console.log(apiPoint)

export function login(email, password) {
    return http.post(apiPoint, { email, password })
}
