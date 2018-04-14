import { compose } from "redux"

const composer = (context) => {
  return context.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export default composer