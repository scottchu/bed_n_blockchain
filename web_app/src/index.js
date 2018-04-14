import React from "react"
import { render } from "react-dom"

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
  <App/>,
  document.querySelector("#root")
)
