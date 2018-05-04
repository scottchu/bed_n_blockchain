import { Observable } from "rxjs"
import { get as getHeaders } from "../headers"

const method = "DELETE"

const del = (url, body) => {
  return {
    headers: getHeaders(),
    method,
    url,
    body
  }
}

export default del