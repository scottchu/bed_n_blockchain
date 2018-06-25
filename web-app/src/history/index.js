import createBrowserHistory from "history/createBrowserHistory"
import Rx from "./rx"

const history = createBrowserHistory()

history.rx = Rx(history)

export default history