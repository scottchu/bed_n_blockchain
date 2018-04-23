import { combineEpics } from "redux-observable"

import signUp from "./signUp"

export default combineEpics(
  signUp
)