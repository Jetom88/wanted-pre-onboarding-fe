import Api, { METHOD } from "./interceptor";

export const GET_TODOS = () => {
  return Api({
    method: METHOD.GET,
    url: "todos",
  });
};

export const POST_TODOS = (form) => {
  return Api({
    method: METHOD.POST,
    url: "todos",
    data: form,
  });
};

export const PUT_TODOS = (form, id) => {
  return Api({
    method: METHOD.POST,
    url: `todos/${id}`,
    data: form,
  });
};

export const DELETE_TODOS = (id) => {
  return Api({
    method: METHOD.DELETE,
    url: `todos/${id}`,
  });
};
