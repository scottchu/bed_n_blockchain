import { combineEpics, ofType } from "redux-observable"
import { animationFrameScheduler, fromEvent, merge } from "rxjs"
import { debounceTime, distinctUntilChanged, map, mapTo, sampleTime, startWith } from 'rxjs/operators'
import { always, ifElse, equals, prop } from "ramda"

import {
  TYPE,
  scrollStart,
  scrollStop,
  updateOffsetY
} from "../../actions/browser"

/*
  Observe window scroll event

  Returns: [scrollStart]
*/

const offsetYOnWindowScroll = (action$, _, { window }) => {
  const offsetY = (window) => (_evevnt) => prop("scrollY", window)

  return fromEvent(window, "scroll")
    .pipe(
      sampleTime(1, animationFrameScheduler),
      map(offsetY(window)),
      map(updateOffsetY)
    )
}

const scrollingOnWindowScroll = (action$) => {
  const scrollAction = ifElse(
    equals(true),
    always(scrollStart()),
    always(scrollStop())
  )

  const updateOffsetY$ = action$
    .pipe(
      ofType(TYPE.updateOffsetY)
    )

  const start$ = updateOffsetY$
    .pipe(
      mapTo(true)
    )

  const stop$ = updateOffsetY$
    .pipe(
      debounceTime(120, animationFrameScheduler),
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
  offsetYOnWindowScroll,
  scrollingOnWindowScroll
)