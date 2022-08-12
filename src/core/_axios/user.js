import Api, { METHOD } from "./interceptor";

export const POST_REGISTER = (form) => {
  return Api({
    method: METHOD.POST,
    url: "auth/signup",
    data: form,
  });
};
