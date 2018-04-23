import { headers } from "../defaults"

export const put = (url, body) => {
  return {
    method: "PUT",
    headers,
    url,
    body
  }
}

export default put