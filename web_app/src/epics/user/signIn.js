import { Observable } from "rxjs"

import { always, compose, mapObjIndexed, path, pick, prop } from "ramda"

import { TYPE, signInSuccessful, signInFailed } from "../../actions/user"

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

const actionOnSignInFailed = compose(
  Observable.of,
  signInFailed,
  responseErrors
)

const epic = (action$, { getState }, { api }) => {
  return action$
    .ofType(TYPE.signIn)
    .map(getUserSessionForm(getState))
    .flatMap((data) => {
      return api.post(api.path.session, data)
      .map(signInSuccessful)
      .catch(actionOnSignInFailed)
    })
}

export default epic