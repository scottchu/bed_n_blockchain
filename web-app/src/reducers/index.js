import { combineReducers } from "redux"

import browser from "./browser"
import hostings from "./hostings"
import listings from "./listings"
import search from "./search"
import session from "./session"
import user from "./user"

import signOut from "./signOut"

const combinedReducers = combineReducers({
  browser,
  hostings,
  listings,
  search,
  session,
  user
})

export default signOut(combinedReducers)