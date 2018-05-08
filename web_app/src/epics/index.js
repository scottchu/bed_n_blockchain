import { combineEpics } from "redux-observable"

import browser from "./browser"
import user from "./user"

// ====================================
// Setup Root Redux-Observable
// ====================================

const epics = combineEpics(
  browser,
  user
)

export default epics