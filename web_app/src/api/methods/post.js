import { ajax } from 'rxjs/ajax'
import { get as getHeaders } from "../headers"

const method = "POST"

const post = (url, body) => {
  return ajax({
    headers: getHeaders(),
    method,
    url,
    body
  })
}

export default post