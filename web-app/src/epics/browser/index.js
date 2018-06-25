import { combineEpics } from "redux-observable"

import onScroll from "./onScroll"
import scrollTo from "./scrollTo"

export default combineEpics(
  onScroll,
  scrollTo
)