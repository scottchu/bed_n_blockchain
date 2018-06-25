import { combineEpics } from "redux-observable"

import browser from "./browser"
import history from "./history"
import listings from "./listings"
import user from "./user"

// ====================================
// Setup Root Redux-Observable
// ====================================

const epics = combineEpics(
  browser,
  history,
  listings,
  user
)

export default epics