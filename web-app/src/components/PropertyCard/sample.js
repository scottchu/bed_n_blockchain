import {
  converge,
  identity,
  length,
  multiply,
  nth,
  pipe
} from "ramda"

const randomIndex = pipe(
  length,
  converge(multiply, [Math.random, Math.floor]),
  Math.floor
)

const sample = converge(nth, [randomIndex, identity])

export default sample