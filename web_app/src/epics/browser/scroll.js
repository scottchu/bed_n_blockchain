import { combineEpics, ofType } from "redux-observable"
import { animationFrameScheduler, fromEvent } from "rxjs"
import { debounceTime, map, sampleTime } from 'rxjs/operators'

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
  return fromEvent(window, "scroll")
    .pipe(
      sampleTime(10, animationFrameScheduler),
      map(scrollY(window)),
      map(scrollStart)
    )
}

/*
  Observe scrollStart events with debounce 200ms then consider
  window scroll stopped

  Returns: [scrollStop]
*/
const windowScrollStop = (action$) => {
  return action$
    .pipe(
      ofType(TYPE.scrollStart),
      debounceTime(60, animationFrameScheduler),
      map(scrollStop)
    )
}

export default combineEpics(
  windowScrollStart,
  windowScrollStop
)