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
  cookies,
  signedIn
}

const middleware = createEpicMiddleware(epics, { dependencies })

export default middleware