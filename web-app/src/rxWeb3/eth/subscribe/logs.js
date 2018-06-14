import { Observable } from "rxjs"

const logs = ({ eth }) => (options = {}) => {
  return Observable.create((observer) => {
    const subscription = eth
      .subscribe("logs", options, (error, log) => {
        if (error)
          observer.error(error)

        observer.next(log)
      })
      .on("data", (log) => {
        observer.next(log)
      })
      .on("changed", (log) => {
        observer.next(log)
      })

    return () => {
      subscription.unsubscribe((error, success) => observer.complete({ error, success }))
    }
  })
}

export default logs