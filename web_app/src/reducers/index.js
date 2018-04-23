import { combineReducers } from "redux"

import user from "./user"
import session from "./session"

const reducers = combineReducers({
  user,
  session
})

export default reducers