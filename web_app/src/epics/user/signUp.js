import { Observable } from "rxjs"

import { always, compose, mapObjIndexed, path, pick, prop } from "ramda"

import { TYPE, signUpSuccessful, signUpFailed } from "../../actions/user"

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

const onSignUpSuccessful = compose(
  signUpSuccessful,
  prop("response")
)

const onSignUpFailed = compose(
  Observable.of,
  signUpFailed,
  responseErrors
)

const epic = (action$, { getState }, { api }) => {
  return action$
    .ofType(TYPE.signUp)
    .map(getUserSessionForm(getState))
    .flatMap((data) => {
      return api.post(api.path.user, data)
      .map(onSignUpSuccessful)
      .catch(onSignUpFailed)
      .take(1)
    })
}

export default epic