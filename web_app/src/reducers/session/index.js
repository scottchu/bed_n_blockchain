import { combineReducers } from "redux"

import form from "./form"
import status from "./status"

export default combineReducers({
  form,
  status
})