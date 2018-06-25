import { ofType } from "redux-observable"
import { ignoreElements, tap } from "rxjs/operators"

import { always, cond, converge, equals, pipe, prop, T } from "ramda"

import { TYPE } from "../../actions/history"

const typeIs = (type) => converge(equals, [prop("type"), always(type)])

const location = prop("location")

const call = (history) => cond([
  [typeIs(TYPE.location.pop), pipe(location, history.pop)],
  [typeIs(TYPE.location.push), pipe(location, history.push)],
  [typeIs(TYPE.location.replace), pipe(location, history.replace)],
  [T, () => {}]
])

const epic = (action$, _state$, { history }) => {
  return action$
    .pipe(
      ofType(TYPE.location.pop, TYPE.location.push, TYPE.location.replace),
      tap(call(history)),
      ignoreElements()
    )
}

export default epic