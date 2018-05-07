import { combineReducers } from "redux"

import user from "./user"
import session from "./session"
import search from "./search"

import signOut from "./signOut"

const combinedReducers = combineReducers({
  user,
  session,
  search
})

export default signOut(combinedReducers)