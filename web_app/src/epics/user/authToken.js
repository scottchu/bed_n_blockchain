import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { complement, isNil, pathOr } from "ramda"

import {
  TYPE,
  signInSuccessful,
  signUpSuccessful,
  setAuthToken
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
const setAuthTokenOnSessionCreated = (action$, _, { cookies }) => {
  return action$
    .ofType(TYPE.signInSuccessful, TYPE.signUpSuccessful)
    .map(authToken)
    .do(writeTo(cookies))
    .map(setAuthToken)
}

/*
  Remove auth token from cookies when sign out.

  Returns: []
*/
const delAuthTokenOnSessionDestroyed = (action$, _, { cookies }) => {
  return action$
    .ofType(TYPE.signOut)
    .do(delFrom(cookies))
    .ignoreElements()
}

/*
  Load auth token from cookies on page load.

  Returns: [UserSetAuthToken]
*/
const getAuthTokenOnPageLoad = (action$, _, { api, cookies, signedIn }) => {
  return Observable
    .of(getFrom(cookies))
    .filter(isNotNil)
    .do(api.headers.set("Authorization"))
    .do(() => signedIn.next(true))
    .map(setAuthToken)
}

export default combineEpics(
  setAuthTokenOnSessionCreated,
  delAuthTokenOnSessionDestroyed,
  getAuthTokenOnPageLoad
)