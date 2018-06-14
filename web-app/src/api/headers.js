import { always, curry, lensProp, omit, set as setMap} from "ramda"

let data = {
  "Accept": "application/json",
  "Content-Type": "application/json"
}

export const get = () => data

export const set = curry((key, value) => {
  data = setMap(lensProp(key), value, data)
})

export const del = (keys) => {
  data = omit(keys, data)
}