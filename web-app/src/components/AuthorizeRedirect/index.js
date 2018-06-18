import React from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import { is, pathEq } from "ramda"

const isFunc = is(Function)
const isBool = is(Boolean)

const signedIn = pathEq(["auth", "signedIn"])

const AuthorizeRedirect = ({
  auth,
  when,
  history,
  ...props
}) => {

  if (when(auth))
    return <Redirect {...props} />

  return null
}

AuthorizeRedirect.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string,
    signedIn: PropTypes.bool.isRequired
  }).isRequired,
  when: PropTypes.func.isRequired
}

export default AuthorizeRedirect