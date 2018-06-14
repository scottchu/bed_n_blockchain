import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { signOut } from "../../actions/user"

const SignOut = ({ dispatch }) => {
  dispatch(signOut())

  return <Redirect to="/" />
}

export default connect(
  null,
  null
)(SignOut)
