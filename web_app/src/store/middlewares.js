// ====================================
// Setup Redux middlewares
// ====================================
import { applyMiddleware } from "redux"
import logger from "redux-logger"

const middlewares = [
  logger
]

export default applyMiddleware(...middlewares)
