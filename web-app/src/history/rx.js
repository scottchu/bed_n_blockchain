import { Observable } from "rxjs"

const listen = (history) => () => {
  return Observable.create((observer) => {
    const unlisten = history.listen((location, action) => {
      observer.next({ action, location })
    })

    return () => unlisten()
  })
}

const Rx = (history) => {
  return {
    listen: listen(history)
  }
}

export default Rx