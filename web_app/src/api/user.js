import { post } from "./utils"

const ENDPOINT = {
  root: "http://localhost:4000/api/user"
}

export const create = (body) => {
  return post(ENDPOINT.root, body)
}