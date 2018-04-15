import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

// ====================================
// Store
// ====================================
import store from "./store"

// ====================================
// Components and styles
// ====================================
import App from "./components/App"

import "normalize.css"
import "./styles/global.css"

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
)
