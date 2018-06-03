import { combineReducers } from "redux"

import browser from "./browser"
import listings from "./listings"
import search from "./search"
import session from "./session"
import user from "./user"

import signOut from "./signOut"

const combinedReducers = combineReducers({
  browser,
  listings,
  search,
  session,
  user
})

export default signOut(combinedReducers)