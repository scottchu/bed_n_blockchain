import { combineEpics } from "redux-observable"

import call from "./call"
import listen from "./listen"

export default combineEpics(
  call,
  listen
)