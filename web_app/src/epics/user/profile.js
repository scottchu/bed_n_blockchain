import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { propOr } from "ramda"

import {
  TYPE,
  signInSuccessful,
  signUpSuccessful,
  setProfile
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

export default combineEpics(
  sessionCreated
)