import { ajax } from 'rxjs/ajax'
import { get as getHeaders } from "../headers"

const method = "PUT"

export const put = (url, body) => {
  return ajax(request = {
    headers: getHeaders(),
    method,
    url,
    body
  })
}

export default put