import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { always, compose, mapObjIndexed, path, pick, prop } from "ramda"

import { TYPE, signUpSuccessful, signUpFailed } from "../../actions/user"

import { create } from "../../api/session"

const sessionForm = path(["session", "form"])

const castParams = pick(["email", "password"])

const mapValues = mapObjIndexed(prop("value"))

const format = compose(
  mapValues,
  castParams,
  sessionForm
)

const getUserSessionForm = (getState) => () => format(getState())

const responseErrors = path(["response", "errors"])

const actionOnSignUpFailed = compose(
  Observable.of,
  signUpFailed,
  responseErrors
)

const epic = (action$, store) => {
  return action$
    .ofType(TYPE.signIn)
    .map(getUserSessionForm(store.getState))
    .flatMap((data) => {
      return Observable.ajax(create(data))
      .map(signUpSuccessful)
      .catch(actionOnSignUpFailed)
    })
}



export default epic