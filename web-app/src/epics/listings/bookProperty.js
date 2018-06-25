import { ofType } from "redux-observable"
import { mapTo, pipe } from "rxjs/operators"

import { TYPE } from "../../actions/listings"

const epic = (action$) => {
  return action$
    .pipe(
      ofType(TYPE.bookProperty),
      mapTo({ type: "BOOKING REQUEST RECEIVED"})
    )
}

export default epic