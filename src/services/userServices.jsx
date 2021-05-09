import http from "./httpService";

const apiPoint = "/users/register";
console.log(apiPoint);

export function register(user) {
  return http.post(apiPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

const formPoint = "/form/submit";

export function submit(user) {
  return http.post(formPoint, {
    name: user.name,
    title: user.title,
  });
}

const sigPoint = "/form/signs";

export function submitSigns(sign) {
  
  return http.post(sigPoint, {
    nationalInsNo: sign.nationalInsNo,
    img: sign.trimmedDataURL,
  });
}
