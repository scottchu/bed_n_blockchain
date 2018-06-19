import React from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import { is, pathEq } from "ramda"

import authPropTypes from "../propTypes/auth"

const isFunc = is(Function)
const isBool = is(Boolean)

const signedIn = pathEq(["auth", "signedIn"])

const AuthorizeRedirect = ({
  auth,
  when,
  ...props
}) => {

  if (when(auth))
    return <Redirect {...props} />

  return null
}

AuthorizeRedirect.propTypes = {
  auth: authPropTypes.isRequired,
  when: PropTypes.func.isRequired
}

export default AuthorizeRedirect