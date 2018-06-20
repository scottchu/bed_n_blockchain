import { connect } from "react-redux"

import Pagination from "../../components/Pagination"

import { fetchStart } from "../../actions/hostings"

const mapStateToProps = (state) => {
  return {
    currentPage: state.hostings.currentPage,
    totalPages: state.hostings.totalPages
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