import { of } from "rxjs"
import { take } from "rxjs/operators"

import { fetchStart } from "../../actions/listings"

const epic = (action$, _store, { api }) => {
  return of(fetchStart({ page: 1 }))
    .pipe(take(1))
}

export default epic