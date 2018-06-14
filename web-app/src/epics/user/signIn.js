import { ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, exhaustMap, map, mapTo, pluck, switchMap, take, tap } from "rxjs/operators"

import { always, mapObjIndexed, path, pipe, pick, prop } from "ramda"

import { TYPE, signInSuccessful, signInFailed } from "../../actions/user"

const sessionParams = pipe(
  path(["session", "form"]),
  pick(["email", "password"]),
  mapObjIndexed(prop("value"))
)

const getUserSessionForm = (getState) => () => format(getState())

const onSignInSuccessful = pipe(
  prop("response"),
  signInSuccessful
)

const onSignInFailed = pipe(
  prop("message"),
  signInFailed,
  of
)

const epic = (action$, state$, { api }) => {
  return action$
    .pipe(
      ofType(TYPE.signIn),
      map(() => state$.value),
      map(sessionParams),
      switchMap((data) => {
        return api
          .post(api.path.session, data)
          .pipe(
            map(onSignInSuccessful),
            catchError(onSignInFailed),
            take(1)
          )
      })
    )
}

export default epic