import { Observable } from "rxjs"
import { get as getHeaders } from "../headers"

const method = "POST"

const post = (url, body) => {
  const request = {
    headers: getHeaders(),
    method,
    url,
    body
  }

  return Observable.ajax(request)
}

export default post