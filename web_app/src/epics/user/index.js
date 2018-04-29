import { combineEpics } from "redux-observable"

import authToken from "./authToken"
import profile from "./profile"
import signIn from "./signIn"
import signUp from "./signUp"

export default combineEpics(
  authToken,
  profile,
  signIn,
  signUp
)