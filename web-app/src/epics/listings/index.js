import { combineEpics } from "redux-observable"

import bookProperty from "./bookProperty"
import fetch from "./fetch"

export default combineEpics(
  bookProperty,
  fetch
)