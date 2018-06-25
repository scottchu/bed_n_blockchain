import { ofType } from "redux-observable"

import { map, tap, ignoreElements } from 'rxjs/operators'
import { prop } from "ramda"

import { TYPE } from "../../actions/browser"

const epic = (action$, _state$, { window }) => {
  return action$
    .pipe(
      ofType(TYPE.scrollTo),
      map(prop("coordinate")),
      tap((coordinate) => window.scroll(coordinate)),
      ignoreElements()
    )
}

export default epic