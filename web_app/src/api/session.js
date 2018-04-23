import { post } from "./utils"

const ENDPOINT = {
  root: "http://localhost:4000/api/session",
  refresh: "http://localhost:4000/api/session/refresh"
}

export const create = (session) => {
  return post(ENDPOINT.root, { session })
}