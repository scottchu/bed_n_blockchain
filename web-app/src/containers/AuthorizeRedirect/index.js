import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import AuthorizeRedirect from "../../components/AuthorizeRedirect"

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps,
  null
)(AuthorizeRedirect)