// ====================================
// Setup Redux compose
// ====================================
import { compose } from "redux"
import { defaultTo, pipe, prop } from "ramda"

const composer = pipe(
  prop("__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"),
  defaultTo(compose)
)

export default composer