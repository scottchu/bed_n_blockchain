import React, { Component } from "react"
import { complement, isEmpty } from "ramda"

export const ifElse = (bool, lhs, rhs) => {
  return bool ? lhs : rhs
}

export const join = (...classes) => {
  return classes.filter(complement(isEmpty)).join(" ")
}

const helpers = {
  ifElse,
  join
}

export const withStyle = (style) => (ReactComponent) => {
  style = {...style, ...helpers}

  const WithStyle = (props) => {
    return (
      <ReactComponent
        style={style}
        {...props} />
    )
  }

  return WithStyle
}

