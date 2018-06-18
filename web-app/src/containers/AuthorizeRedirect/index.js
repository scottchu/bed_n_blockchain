import React from "react"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import AuthorizeRedirect from "../../components/AuthorizeRedirect"

const mapStateToProps = ({ user }) => {
  return { auth: user.auth }
}

export default withRouter(connect(
  mapStateToProps,
  null
)(AuthorizeRedirect))