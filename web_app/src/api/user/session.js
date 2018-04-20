import { headers } from "../defaults"

const ENDPOINT = {
  create: "http://localhost:4000/user/session/create"
}

export const postCreate = (body) => {
  return {
    url: ENDPOINT.create,
    method: "POST",
    headers,
    body
  }
}