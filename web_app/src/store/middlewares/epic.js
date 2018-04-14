// ====================================
// Setup Redux-Observable middleware
// ====================================

import { createEpicMiddleware } from "redux-observable"

import epics from "../../epics"

const middleware = createEpicMiddleware(epics)

export default middleware