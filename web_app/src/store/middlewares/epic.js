// ====================================
// Setup Redux-Observable middleware
// ====================================
import { createEpicMiddleware } from "redux-observable"
import api from "../../api"
import cookies from "../../lib/cookies"

import epics from "../../epics"

const dependencies = {
  console,
  cookies
}

const middleware = createEpicMiddleware(epics, { dependencies })

export default middleware