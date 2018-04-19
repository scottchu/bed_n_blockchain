import { combineEpics } from "redux-observable"
import { Observable } from "rxjs"

import { TYPE, createSuccessful, createFailed } from "../../actions/user/session"

const create = (action$, store) => {
  return action$
    .ofType(TYPE.create)
    .map(() => {
      const form = store.getState().user.session.form

      return {
        email: form.email.value,
        password: form.password.value
      }
    })
    .flatMap((data) => {
      return Observable.ajax({
        url: "http://localhost:4000/session/create",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: {
          form: data
        }
      })
      .map(createSuccessful)
      .catch(createFailed)
    })

}

export default combineEpics(
  create
)