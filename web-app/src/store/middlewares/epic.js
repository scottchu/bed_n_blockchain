// ====================================
// Setup Redux-Observable middleware
// ====================================
import { createEpicMiddleware } from "redux-observable"
import api from "../../api"
import cookies from "../../lib/cookies"
import history from "../../history"

const dependencies = {
  api,
  cookies,
  history,

  console,
  document,
  window
}

const middleware = createEpicMiddleware({ dependencies })

export default middleware