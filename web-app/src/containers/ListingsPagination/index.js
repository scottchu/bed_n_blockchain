import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import Pagination from "../../components/Pagination"

import { fetchStart } from "../../actions/listings"

const mapStateToProps = (state) => {
  return {
    currentPage: state.listings.currentPage,
    totalPages: state.listings.totalPages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    jump: (page) => dispatch(fetchStart({ page }))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)