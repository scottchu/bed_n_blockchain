import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import PropertyCard from "../../components/PropertyCard"

import { bookProperty } from "../../actions/listings"

const mapDispatchToProps = (dispatch, { property }) => {
  return {
    book: () => dispatch(bookProperty(property.id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PropertyCard)