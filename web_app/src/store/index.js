import { createStore } from "redux"

// ====================================
// Redux store parts
// ====================================
import composer from "./composer"
import initialState from "./initialState"
import middlewares from "./middlewares"

// ====================================
// Reducers / Epics
// ====================================
import reducers from "../reducers"

// ====================================
// Create redux store
// ====================================
const compose = composer(window)

const store = createStore(
  reducers,
  initialState,
  compose(middlewares)
)

export default store