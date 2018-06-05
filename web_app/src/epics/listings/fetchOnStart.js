import { Observable } from "rxjs"

import { fetchStart } from "../../actions/listings"

const epic = (action$, _store, { api }) => {
  return Observable
    .of(fetchStart({ page: 1 }))
    .delay(100)
    .take(1)
}

export default epic