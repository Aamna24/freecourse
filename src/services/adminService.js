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
    console.log(course)
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
        img: course.files[0]



    })
}