import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { equals, pathOr, propOr } from "ramda"

import {
  TYPE,
  signInSuccessful,
  signUpSuccessful,
  setProfile,
  signOut
} from "../../actions/user"

const profile = propOr(null, "profile")

/*
  Get profile and return it on sign in / sign up successful

  Returns: [UserSetProfile]
*/
const sessionCreated = (action$) => {
  return action$
    .ofType(TYPE.signInSuccessful, TYPE.signUpSuccessful)
    .map(profile)
    .map(setProfile)
}

const getProfile = pathOr(null, ["response", "profile"])

const fetchProfile = (action$, store, { api, signedIn }) => {
  return signedIn
    .filter(equals(true))
    .flatMap(() => {
      return api.get(api.path.user)
        .map(getProfile)
        .map(setProfile)
        .catch(() => Observable.of(signOut()))
        .take(1)
    })
}

export default combineEpics(
  sessionCreated,
  fetchProfile
)