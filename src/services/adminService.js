import http from './httpService';

import jwtDecode from 'jwt-decode'

const apiPoint = "/admin/login"
const tokenKey = "token"

export async function adminlogin(email, password) {
    const {data: jwt} = await http.post(apiPoint, { email, password })
    localStorage.setItem(tokenKey, jwt.token);
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

export function addCourse(course) {
    return http.post(addCoursePoint, {
        courseTitle: course.courseTitle,
        courseDescription: course.courseDescription,
        courseContent: course.courseContent,
        courseBenefits: course.courseBenefits,
        courseLength: course.courseLength,
        awardingBody: course.awardingBody,
        courseLevel: course.courseLevel,
        funding: course.funding,
        learningMethods: course.learningMethods,
      
    })
}

export default{
    adminlogin,
    getCurrentUser,
    addCourse
}