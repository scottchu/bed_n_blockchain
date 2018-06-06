import { createStore } from "redux"

/*
  Redux store parts
*/
import composer from "./composer"
import initialState from "./initialState"
import middlewares from "./middlewares"

/*
  Reducers / Epics
*/
import rootEpic from "../epics"

import epicMiddleware from "./middlewares/epic"
import reducers from "../reducers"

/*
  Create redux store
*/
const compose = composer(window)

const store = createStore(
  reducers,
  initialState,
  compose(middlewares)
)

epicMiddleware.run(rootEpic)

export default store