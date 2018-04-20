import { headers } from "../defaults"

const CONFIG = {
  create: {
    url: "http://localhost:4000/api/user/session",
    method: "POST",
    headers
  },
  delete: {
    url: "http://localhost:4000/api/user/session",
    method: "DELETE",
    headers
  },
  refresh: {
    url: "http://localhost:4000/api/user/session/refresh",
    method: "POST",
    headers
  }
}

export const postCreate = (body) => {
  return {...CONFIG.create, body}
}