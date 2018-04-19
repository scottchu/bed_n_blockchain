import { combineEpics } from "redux-observable"

import user from "./user"

// ====================================
// Setup Root Redux-Observable
// ====================================

const epics = combineEpics(
  user
)

export default epics