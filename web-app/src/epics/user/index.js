import { combineEpics } from "redux-observable"

import account from "./account"
import authToken from "./authToken"
import signIn from "./signIn"
import signUp from "./signUp"

export default combineEpics(
  account,
  authToken,
  signIn,
  signUp
)