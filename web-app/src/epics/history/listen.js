import { map, startWith } from "rxjs/operators"

import { cond, equals, pipe, prop, T } from "ramda"

import { locationPushed, locationPopped, locationReplaced } from "../../actions/history"

const action = prop("action")

const epic = (action$, _state$, { history }) => {
  return history.rx.listen()
    .pipe(
      startWith(history),
      map(cond([
        [pipe(action, equals("PUSH")), locationPushed],
        [pipe(action, equals("POP")), locationPopped],
        [pipe(action, equals("REPLACE")), locationReplaced]
      ]))
    )
}

export default epic