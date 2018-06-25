import { combineEpics, ofType } from "redux-observable"
import { of } from "rxjs"
import { filter, map, ignoreElements, tap } from "rxjs/operators"

import { complement, isNil, pathOr } from "ramda"

import {
  TYPE,
  signInSuccessful,
  signUpSuccessful,
  setAuthToken,
  restoreAuthToken
} from "../../actions/user"

const authToken = pathOr(null, ["auth", "token"])

const writeTo = (c) => (t) => c.setItem("authToken", t)
const delFrom = (c) => () => c.removeItem("authToken")
const getFrom = (c) => c.getItem("authToken")

const isNotNil = complement(isNil)

/*
  Extract and store auth token in cookies on sign in /
  sign up successful.

  Returns: [UserSetAuthToken]
*/
const setAuthTokenOnSessionCreated = (action$, _state$, { api, cookies }) => {
  return action$
    .pipe(
      ofType(TYPE.signInSuccessful, TYPE.signUpSuccessful),
      map(authToken),
      tap(writeTo(cookies)),
      tap(api.headers.set("Authorization")),
      map(setAuthToken)
    )
}

/*
  Remove auth token from cookies when sign out.

  Returns: []
*/
const delAuthTokenOnSessionDestroyed = (action$, _state$, { api, cookies }) => {
  return action$
    .pipe(
      ofType(TYPE.signOut),
      tap(delFrom(cookies)),
      tap(() => api.headers.del(["Authorization"])),
      ignoreElements()
    )
}

/*
  Load auth token from cookies on page load.

  Returns: [UserSetAuthToken]
*/
const getAuthTokenOnStart = (action$, _state$, { api, cookies }) => {
  return of(getFrom(cookies))
    .pipe(
      filter(isNotNil),
      tap(api.headers.set("Authorization")),
      map(restoreAuthToken)
    )
}

export default combineEpics(
  setAuthTokenOnSessionCreated,
  delAuthTokenOnSessionDestroyed,
  getAuthTokenOnStart
)