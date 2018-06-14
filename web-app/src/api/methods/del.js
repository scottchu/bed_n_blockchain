import { ajax } from 'rxjs/ajax'
import { get as getHeaders } from "../headers"

const method = "DELETE"

const del = (url, body) => {
  return ajax(request = {
    headers: getHeaders(),
    method,
    url,
    body
  })
}

export default del