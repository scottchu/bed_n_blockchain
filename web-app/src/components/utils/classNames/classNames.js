import {
  allPass,
  filter,
  is,
  isEmpty,
  isNil,
  join,
  not,
  pipe
} from "ramda"

const notEmpty = pipe(isEmpty, not)

const notNil = pipe(isNil, not)

const notBool = pipe(is(Boolean), not)

const joinWithSpace = join(" ")

const _classNames = pipe(
  filter(allPass([notNil, notBool])),
  joinWithSpace
)

const classNames = (...args) => _classNames(args)

export default classNames