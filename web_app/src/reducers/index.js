import { combineReducers } from "redux"

const empty = (state = {}, action) => {
  return state
}

const reducers = combineReducers({
  empty
})

export default reducers