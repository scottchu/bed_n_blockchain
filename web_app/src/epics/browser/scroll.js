import { combineEpics } from "redux-observable"
import { Observable, Scheduler } from "rxjs"

import {
  TYPE,
  scrollStart,
  scrollStop
} from "../../actions/browser"

/*
  Observe window scroll event

  Returns: [scrollStart]
*/
const scrollY = (window) => () => window.scrollY

const windowScrollStart = (action$, _, { window }) => {
  const animationFrame$ = Observable.of(10, Scheduler.animationFrame)

  return Observable.fromEvent(window, "scroll")
    .throttle(() => animationFrame$)
    .map(scrollY(window))
    .map(scrollStart)
}

/*
  Observe scrollStart events with debounce 200ms then consider
  window scroll stopped

  Returns: [scrollStop]
*/
const windowScrollStop = (action$) => {
  return action$
    .ofType(TYPE.scrollStart)
    .debounceTime(200)
    .map(scrollStop)
}

export default combineEpics(
  windowScrollStart,
  windowScrollStop
)