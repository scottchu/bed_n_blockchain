import { combineEpics } from "redux-observable"

import signIn from "./signIn"
import signUp from "./signUp"

export default combineEpics(
  signIn,
  signUp
)