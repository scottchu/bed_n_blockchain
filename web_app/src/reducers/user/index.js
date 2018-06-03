import { combineReducers } from "redux"

import account from "./account"
import auth from "./auth"

export default combineReducers({
  account,
  auth
})