import { Observable } from "rxjs"
import { forEachObjIndexed } from "ramda"

import { get as getHeaders } from "../headers"

const method = "GET"

const appendTo = (s) => (v, k) => s.append(k, v)

const buildURL = (urlString, query) => {
  let url = new URL(urlString)

  forEachObjIndexed(appendTo(url.searchParams), query)

  return url.toString()
}

const get = (url, query = {}) => {
  const request = {
    headers: getHeaders(),
    method,
    url: buildURL(url, query)
  }

  return Observable.ajax(request)
}

export default get