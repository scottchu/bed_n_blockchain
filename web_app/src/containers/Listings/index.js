import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import Properties from "../../components/Properties"

import { fetchStart } from "../../actions/listings"

const mapStateToProps = (state) => {
  return {...state.listings}
}

export default connect(
    mapStateToProps,
    null
)(Properties)