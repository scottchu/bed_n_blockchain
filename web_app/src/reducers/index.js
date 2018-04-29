import { combineReducers } from "redux"

import user from "./user"
import session from "./session"

import signOut from "./signOut"

const combinedReducers = combineReducers({
  user,
  session
})

export default signOut(combinedReducers)