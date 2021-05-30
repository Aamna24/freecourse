import http from './httpService';

import jwtDecode from 'jwt-decode'

const apiPoint = "/admin/login"
const tokenKey = "token"

export async function adminlogin(email, password) {
    const {data: jwt} = await http.post(apiPoint, { email, password })
    localStorage.setItem(tokenKey, jwt.token);
}

// get college Data
export function getCollegeCount(){
    const point = "/admin/collegedata"
    return http.get(point)
}
export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);

       return jwtDecode(jwt);
       
      } catch (ex) {
        return null
      }
}

const addCoursePoint = "/course/registerCourse"
console.log(addCoursePoint)

export function addCourse(data) {
    return http.post(addCoursePoint,data)
}

// update college data
export function updateCollegeInfo(id,contractAmount,pricePerApp){
    const api = "/admin/college/"+id
    return http.patch(api,{contractAmount,pricePerApp})
}

// send email
export function sendEmail(email,subject,message){
    return http.post('/form/email',{email,subject,message})
}

export default{
    adminlogin,
    getCurrentUser,
    addCourse,
    getCollegeCount,
    updateCollegeInfo,
    sendEmail
}