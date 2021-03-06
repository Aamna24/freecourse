import http from "./httpService";

const apiPoint = "https://consulting-backend.herokuapp.com/users/register";
console.log(apiPoint);

export function register(user) {
  return http.post(apiPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

const formPoint = "https://consulting-backend.herokuapp.com/form/submit";

export function submit(user) {
  return http.post(formPoint, {
    name: user.name,
    title: user.title,
  });
}

const sigPoint = "https://consulting-backend.herokuapp.com/form/signs";

export function submitSigns(sign) {
  console.log("sub", sign.trimmedDataURL);
  return http.post(sigPoint, {
    nationalInsNo: sign.nationalInsNo,
    img: sign.trimmedDataURL,
  });
}
