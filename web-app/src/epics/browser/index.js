import { combineEpics } from "redux-observable"

import scroll from "./scroll"

export default combineEpics(
  scroll
)