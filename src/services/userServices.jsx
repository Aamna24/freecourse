import http from "./httpService";
import { apiEndpoint } from "../config.json";

const apiPoint = apiEndpoint + "/users/register";
console.log(apiPoint);

export function register(user) {
  return http.post(apiPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

const formPoint = apiEndpoint + "/form/submit";

export function submit(user) {
  return http.post(formPoint, {
    name: user.name,
    title: user.title,
  });
}

const sigPoint = apiEndpoint + "/form/signs";

export function submitSigns(sign) {
  console.log("sub", sign.trimmedDataURL);
  return http.post(sigPoint, {
    nationalInsNo: sign.nationalInsNo,
    img: sign.trimmedDataURL,
  });
}
