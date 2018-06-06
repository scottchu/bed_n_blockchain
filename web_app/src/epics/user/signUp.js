import { ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, map, switchMap, take } from "rxjs/operators"

import { always, mapObjIndexed, path, pipe, pick, prop } from "ramda"

import { TYPE, signUpSuccessful, signUpFailed } from "../../actions/user"

const sessionParams = pipe(
  path(["session", "form"]),
  pick(["email", "password"]),
  mapObjIndexed(prop("value"))
)

const onSignUpSuccessful = pipe(
  prop("response"),
  signUpSuccessful
)

const onSignUpFailed = pipe(
  prop("message"),
  signUpFailed,
  of
)

const epic = (action$, state$, { api }) => {
  return action$
    .pipe(
      ofType(TYPE.signIn),
      switchMap(() => state$),
      map(sessionParams),
      switchMap((data) => {
        return api
          .post(api.path.userAccount, data)
          .pipe(
            map(onSignUpSuccessful),
            catchError(onSignUpFailed),
            take(1)
          )
      })
    )
}

export default epic