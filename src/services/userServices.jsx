import http from "./httpService";

const apiPoint = "http://localhost:61500/users/register";
console.log(apiPoint);

export function register(user) {
  return http.post(apiPoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

const formPoint = "http://localhost:61500/form/submit";

export function submit(user) {
  return http.post(formPoint, {
    name: user.name,
    title: user.title,
  });
}

const sigPoint = "http://localhost:61500/form/signs";

export function submitSigns(sign) {
  console.log("sub", sign.trimmedDataURL);
  return http.post(sigPoint, {
    nationalInsNo: sign.nationalInsNo,
    img: sign.trimmedDataURL,
  });
}
