import { combineEpics } from "redux-observable"
import { Observable } from "rxjs/Rx"

// ====================================
// Setup Root Redux-Observable
// ====================================

const emptyEpic = (action$) => {
  return action$
    .switchMap(Observable.never)
}

const epics = combineEpics(emptyEpic)

export default epics