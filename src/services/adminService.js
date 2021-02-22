import http from './httpService';
import { apiEndpoint } from '../config.json'

const apiPoint = apiEndpoint + "/admin/login"
console.log(apiPoint)

export function adminlogin(email, password) {
    return http.post(apiPoint, { email, password })
}

const addCoursePoint = apiEndpoint + "/course/registerCourse"
console.log(addCoursePoint)
export function addCourse(course) {
    return http.post(addCoursePoint, {
        courseTitle: course.title,
        courseDescription: course.description,
        courseContent: course.content,
        courseBenefits: course.benefits,
        courseLength: course.courseLength,
        awardingBody: course.awardingBody,
        courseLevel: course.courseLevel,
        funding: course.funding,
        learningMethods: course.learningMethods



    })
}