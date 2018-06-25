import {
  defaultTo,
  divide,
  equals,
  lte,
  match,
  modulo,
  nth,
  path,
  pipe,
  prop,
  range
} from "ramda"

export const visiblePages = (c, t, max = 5) => {
  const m = lte(t, max) ? t : max
  const l = Math.floor(divide(m, 2))
  const r = l + (equals(modulo(m, 2), 0) ? 0 : 1)

  let currentIndex = 0

  const s = c - l
  const e = c + r
  const f = t - e

  const o = s < 1 ?
    (1 - s) :
    f < 0 ?
    f + 1 :
    0

  return range(s + o, e + o)
}

export const search = prop("search")

export const locationSearch = path(["location", "search"])

export const matchPage = pipe(match(/(?!page=)(\d+)/), nth(0))

export const getSearchPage = pipe(search, matchPage, defaultTo(1))