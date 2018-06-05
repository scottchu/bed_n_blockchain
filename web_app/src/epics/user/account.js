import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"
import { compose, equals, pathOr, propOr } from "ramda"

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
const sessionCreated = (action$) => {
  return action$
    .ofType(TYPE.signInSuccessful, TYPE.signUpSuccessful)
    .map(account)
    .map(setAccount)
}

const getAccount = pathOr(null, ["response", "account"])

const onFetchAccountFail = compose(
  Observable.of,
  signOut
)

const fetchAccount = (action$, store, { api, signedIn }) => {
  return signedIn
    .filter(equals(true))
    .flatMap(() => {
      return api.get(api.path.userAccount)
        .map(getAccount)
        .map(setAccount)
        .catch(onFetchAccountFail)
        .take(1)
    })
}

export default combineEpics(
  sessionCreated,
  fetchAccount
)