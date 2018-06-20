import React, { Component } from "react"
import classNames from "./classNames"

const name = (Component) => {
  return Component.displayName || Component.name || "Component"
}

const displayName = (Component) => {
  return `withStyle(${name(Component)})`
}

const withStyle = (style) => (ReactComponent) => {
  class ComponentWithStyle extends Component {
    static displayName = displayName(ReactComponent)

    render() {
      return (
        <ReactComponent
          style={style}
          classNames={classNames}
          {...this.props} />
      )
    }
  }

  return ComponentWithStyle
}

export default withStyle