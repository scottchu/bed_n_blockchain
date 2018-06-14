// ====================================
// Setup and apply Redux middlewares
// ====================================
import { applyMiddleware } from "redux"

import epic from "./epic"
import logger from "./logger"

export default applyMiddleware(
  epic,
  logger
)
