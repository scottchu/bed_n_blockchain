import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

const RedirectWhenSignedIn = ({ signedIn, ...props }) => {
  if (signedIn) {
    return <Redirect {...props} />
  }

  return undefined
}

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.auth.signedIn
  }
}

export default connect(
  mapStateToProps,
  null
)(RedirectWhenSignedIn)