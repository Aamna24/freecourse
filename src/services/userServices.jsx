import http from './httpService';
import { apiEndpoint } from '../config.json'

const apiPoint = apiEndpoint + "/users/register"
console.log(apiPoint)

export function register(user) {
    return http.post(apiPoint, {
        email: user.username,
        password: user.password,
        name: user.name
    })
}

