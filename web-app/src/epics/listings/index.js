import { combineEpics } from "redux-observable"

import fetch from "./fetch"
import fetchOnSignedOut from "./fetchOnSignedOut"
import fetchOnStart from "./fetchOnStart"

export default combineEpics(
  fetch,
  fetchOnSignedOut,
  fetchOnStart
)