import { Observable } from "rxjs"

const syncing = ({ eth }) => () => {
  return Observable.create((observer) => {
    const subscription = eth.subscribe("syncing", (error, sync) => {
      console.log(error, sync)
      // if (error)
        // observer.error(error)

      observer.next({ event: "callback", sync })
    })
    .on("changed", (isSyncing) => {
      observer.next({ event: "changed", isSyncing })
    })

    return () => {
      subscription.unsubscribe((error, success) => observer.complete({ error, success }))
    }
  })
}

export default syncing