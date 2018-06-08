import { combineEpics, ofType } from "redux-observable"
import { animationFrameScheduler, fromEvent, merge } from "rxjs"
import { debounceTime, distinctUntilChanged, map, mapTo, sampleTime, startWith } from 'rxjs/operators'
import { always, ifElse, equals } from "ramda"

import {
  TYPE,
  scrollStart,
  scrollStop
} from "../../actions/browser"

/*
  Observe window scroll event

  Returns: [scrollStart]
*/

const windowScroll = (action$, _, { window }) => {
  const scrollAction = ifElse(
    equals(true),
    always(scrollStart()),
    always(scrollStop())
  )

  const scroll$ = fromEvent(window, "scroll")
    .pipe(
      sampleTime(60, animationFrameScheduler)
    )

  const start$ = scroll$
    .pipe(
      mapTo(true)
    )

  const stop$ = scroll$
    .pipe(
      debounceTime(60, animationFrameScheduler),
      mapTo(false)
    )

  return merge(start$, stop$)
    .pipe(
      startWith(false),
      distinctUntilChanged(),
      map(scrollAction)
    )
}

export default combineEpics(
  windowScroll
)