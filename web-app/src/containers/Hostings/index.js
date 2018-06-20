import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { pathOr } from "ramda"

import Hosting from "../Hosting"
import Grid from "../../components/Grid"

const mapStateToProps = (state) => {
  return {
    items: state.hostings.properties,
    render: (property) => {
      return <Hosting key={property.id} property={property} />
    }
  }
}

export default connect(
    mapStateToProps,
    null
)(Grid)