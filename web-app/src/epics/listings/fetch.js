import { ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, map, switchMap, take, takeUntil } from "rxjs/operators"

import { pipe, path, prop, propOr } from "ramda"

import { TYPE, fetchComplete, fetchFail } from "../../actions/listings"

const onFetchComplete = pipe(
  prop("response"),
  fetchComplete
)

const onFetchFail = pipe(
  path(["response", "errors"]),
  fetchFail,
  of
)

const dataWithDefault = propOr({}, "data")

const epic = (action$, _store, { api }) => {
  const cancel$ = action$
    .pipe(ofType(TYPE.fetchStop))

  return action$
    .pipe(
      ofType(TYPE.fetchStart),
      map(dataWithDefault),
      switchMap((data) => {
        return api
          .get(api.path.listings, data)
          .pipe(
            map(onFetchComplete),
            catchError(onFetchFail),
            take(1),
            takeUntil(cancel$)
          )
      })
    )

}

export default epic