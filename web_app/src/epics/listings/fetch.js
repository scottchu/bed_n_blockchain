import { Observable } from "rxjs"
import { compose, path, prop, propOr } from "ramda"

import { TYPE, fetchComplete, fetchFail } from "../../actions/listings"

const onFetchComplete = compose(
  fetchComplete,
  prop("response")
)

const onFetchFail = compose(
  Observable.of,
  fetchFail,
  path(["response", "errors"])
)

const epic = (action$, _store, { api }) => {
  const stopFetching$ = action$
    .ofType(TYPE.fetchStop)

  return action$
    .ofType(TYPE.fetchStart)
    .map(propOr({}, "data"))
    .flatMap((data) => {
      return api
        .get(api.path.listings, data)
        .map(onFetchComplete)
        .catch(onFetchFail)
        .take(1)
        .takeUntil(stopFetching$)
    })
}

export default epic