import React from "react"
import { connect } from "react-redux"

import Listing from "../Listing"
import Grid from "../../components/Grid"

const mapStateToProps = (state) => {
  return {
    items: state.listings.properties,
    render: (property) => {
      return <Listing key={property.id} property={property} />
    }
  }
}

export default connect(
    mapStateToProps,
    null
)(Grid)