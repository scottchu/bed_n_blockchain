import { combineEpics } from "redux-observable"

import browser from "./browser"
import listings from "./listings"
import user from "./user"

// ====================================
// Setup Root Redux-Observable
// ====================================

const epics = combineEpics(
  browser,
  listings,
  user
)

export default epics