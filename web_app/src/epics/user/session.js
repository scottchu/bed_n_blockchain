import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { always, compose, mapObjIndexed, path, pick, prop } from "ramda"

import { TYPE, createSuccessful, createFailed } from "../../actions/user/session"

import { postCreate } from "../../api/user/session"

const format = compose(
  mapObjIndexed(prop("value")),
  pick(["email", "password"]),
  path(["user", "session", "form"])
)

const getUserSessionForm = (getState) => () => format(getState())

const create = (action$, store) => {
  return action$
    .ofType(TYPE.create)
    .map(getUserSessionForm(store.getState))
    .flatMap((data) => {
      return Observable.ajax(postCreate(data))
      .map(createSuccessful)
      .catch(createFailed)
    })
}

export default combineEpics(
  create
)