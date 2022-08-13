import Api, { METHOD } from "./interceptor";

export const POST_SIGNUP = (form) => {
  return Api({
    method: METHOD.POST,
    url: "auth/signup",
    data: form,
  });
};

export const POST_SIGNIN = (form) => {
  return Api({
    method: METHOD.POST,
    url: "auth/signin",
    data: form,
  });
};
