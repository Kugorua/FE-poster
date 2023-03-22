import httpRequest from "./axiosClient";

export const api = {
  get: <T,>(url: string, params?: object) =>
  httpRequest.get<T>(url, {
      ...params,
    }),
  
};
