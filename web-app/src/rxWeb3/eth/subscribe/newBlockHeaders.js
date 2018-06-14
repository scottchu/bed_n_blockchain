import { Observable } from "rxjs"

const newBlockHeaders = ({ eth }) => () => {
  return Observable.create((observer) => {
    const subscription = eth.subscribe("newBlockHeaders", (error, data) => {
      if (error)
        observer.error(error)

      observer.next(data)
    })

    return () => {
      subscription.unsubscribe((error, success) => observer.complete({ error, success }))
    }
  })
}

export default newBlockHeaders