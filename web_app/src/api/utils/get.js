import { forEachObjIndexed } from "ramda"

import { headers } from "../defaults"

const appendTo = (s) => (k, v) => s.append(k, v)

const buildURL = (urlString, query) => {
  let url = new URL(urlString)

  forEachObjIndexed(appendTo(url.searchParams), query)

  return url.toString()
}

const get = (url, query = {}) => {
  return {
    method: "GET",
    headers,
    url: buildURL(url, query)
  }
}

export default get