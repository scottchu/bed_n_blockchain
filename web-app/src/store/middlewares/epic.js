// ====================================
// Setup Redux-Observable middleware
// ====================================
import { createEpicMiddleware } from "redux-observable"
import api from "../../api"
import cookies from "../../lib/cookies"

const dependencies = {
  api,
  console,
  document,
  cookies,
  window
}

const middleware = createEpicMiddleware({ dependencies })

export default middleware