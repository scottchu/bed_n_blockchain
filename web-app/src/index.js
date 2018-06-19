import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import history from "./history"
import store from "./store"

import App from "./components/App"

import "normalize.css"
import "./styles/global.css"

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
)
