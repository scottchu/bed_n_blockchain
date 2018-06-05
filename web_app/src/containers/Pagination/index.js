import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import Pagination from "../../components/Pagination"

import { fetchStart } from "../../actions/listings"

const mapStateToProps = (state) => {
  return {
    current: state.listings.currentPage,
    total: state.listings.totalPages
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