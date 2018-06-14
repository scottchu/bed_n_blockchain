import { Observable, from } from "rxjs"
import { pipe } from "ramda"

import { combine } from "../../utils"

import logs from "./logs"
import newBlockHeaders from "./newBlockHeaders"
import pendingTransactions from "./pendingTransactions"
import syncing from "./syncing"

const clear = ({ eth }) => () => {
  return Observable.create((observer) => {
    const bool = eth.clearSubscription()
    observer.next(bool)
    observer.complete()
  })
}

export default combine({
  clear,
  logs,
  newBlockHeaders,
  pendingTransactions,
  syncing
})