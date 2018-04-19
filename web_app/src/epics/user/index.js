import { combineEpics } from "redux-observable"

import session from "./session"

export default combineEpics(
  session
)