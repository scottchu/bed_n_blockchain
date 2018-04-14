import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"

// ====================================
// Store
// ====================================
import store from "./store"

// ====================================
// Components and styles
// ====================================
import App from "./components/App"
import "normalize.css"

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector("#root")
)
