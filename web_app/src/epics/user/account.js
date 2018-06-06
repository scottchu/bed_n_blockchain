import { combineEpics, ofType } from "redux-observable"
import { of } from "rxjs"
import { catchError, filter, map, switchMap, take, tap } from "rxjs/operators"
import { complement, equals, isNil, pathOr, pipe, propOr } from "ramda"

import {
  TYPE,
  signInSuccessful,
  signUpSuccessful,
  setAccount,
  signOut
} from "../../actions/user"

const account = propOr(null, "account")

/*
  Get profile and return it on sign in / sign up successful

  Returns: [UserSetProfile]
*/
const onSessionCreated = (action$) => {
  return action$
    .pipe(
      ofType(TYPE.signInSuccessful, TYPE.signUpSuccessful),
      map(account),
      map(setAccount)
    )
}

const isNotNil = complement(isNil)

const responseAccount = pathOr(null, ["response", "account"])

const onFetchAccountSuccess = pipe(responseAccount, setAccount)

const onFetchAccountFail = pipe(signOut, of)

const onSessionRestored = (action$, _state$, { api }) => {
  return action$
    .pipe(
      ofType(TYPE.restoreAuthToken),
      filter(isNotNil),
      switchMap(() => {
        return api
          .get(api.path.userAccount)
          .pipe(
            map(onFetchAccountSuccess),
            catchError(onFetchAccountFail),
            take(1)
          )
      })
    )
}

export default combineEpics(
  onSessionCreated,
  onSessionRestored
)