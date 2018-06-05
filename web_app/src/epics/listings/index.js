import { combineEpics } from "redux-observable"

import fetch from "./fetch"
import fetchOnStart from "./fetchOnStart"

export default combineEpics(
  fetch,
  fetchOnStart
)