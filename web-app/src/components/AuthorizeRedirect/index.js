import React from "react"
import { Redirect } from "react-router-dom"

import { is, pathEq } from "ramda"

const isFunc = is(Function)
const isBool = is(Boolean)

const signedIn = pathEq(["auth", "signedIn"])

const AuthorizeRedirect = ({
  user,
  when,
  whenSignedIn,
  whenNotSignedIn,
  ...props
}) => {
  const shouldRedirect = (
    isFunc(when) ? when(user) : (
      (whenSignedIn && user.auth.signedIn) ||
      (whenNotSignedIn && !user.auth.signedIn)
    )
  )

  if (shouldRedirect)
    return <Redirect {...props} />

  return null
}

export default AuthorizeRedirect