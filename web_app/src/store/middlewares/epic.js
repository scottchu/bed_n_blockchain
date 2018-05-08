// ====================================
// Setup Redux-Observable middleware
// ====================================
import { createEpicMiddleware } from "redux-observable"
import api from "../../api"
import cookies from "../../lib/cookies"
import signedIn from "../../streams/signedIn"

import epics from "../../epics"

const dependencies = {
  api,
  console,
  document,
  cookies,
  signedIn,
  window
}

const middleware = createEpicMiddleware(epics, { dependencies })

export default middleware