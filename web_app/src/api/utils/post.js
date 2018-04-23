import { headers } from "../defaults"

const post = (url, body) => {
  return {
    method: "POST",
    headers,
    url,
    body
  }
}

export default post