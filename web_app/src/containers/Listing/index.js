import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import PropertyCard from "../../components/PropertyCard"

import { bookProperty } from "../../actions/listings"

const mapStateToProps = (state) => {
  return {...state.listings}
}

const mapDispatchToProps = (dispatch, { property }) => {
  console.log(property)
  return {
    book: () => dispatch(bookProperty(property.id))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyCard)