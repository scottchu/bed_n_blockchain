import { ofType } from "redux-observable"
import { of } from "rxjs"
import { take, mapTo } from "rxjs/operators"

import { TYPE as USER_TYPE } from "../../actions/user"
import { fetchStart } from "../../actions/listings"

const epic = (action$, _store, { api }) => {
  return action$
    .pipe(
      ofType(USER_TYPE.signOut),
      mapTo(fetchStart({ page: 1 }))
    )
}

export default epic