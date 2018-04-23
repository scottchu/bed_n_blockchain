import { headers } from "../defaults"

const del = (url, body) => {
  return {
    method: "DELETE",
    headers,
    url,
    body
  }
}

export default del