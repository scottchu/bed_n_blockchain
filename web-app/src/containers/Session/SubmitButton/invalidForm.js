import { anyPass, compose, pathEq, prop } from "ramda"

const invalidForm = compose(
  anyPass([
    pathEq(["email", "isValid"], false),
    pathEq(["password", "isValid"], false)
  ]),
  prop("form")
)

export default invalidForm