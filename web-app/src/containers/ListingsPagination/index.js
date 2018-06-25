import { connect } from "react-redux"

import { withRouter } from "react-router-dom"

import { merge } from "ramda"

import Pagination from "../../components/Pagination"

import { scrollTo } from "../../actions/browser"
import { locationPush } from "../../actions/history"
import { fetchStart } from "../../actions/listings"

const mapStateToProps = (state) => {
  return {
    currentPage: state.listings.currentPage,
    totalPages: state.listings.totalPages
  }
}

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    goto: (page) => {
      const search = (location.search == "" ? "&" : "") + "page=" + page
      dispatch(locationPush(merge(location, { search })))
      dispatch(scrollTo({ top: 0, behavior: "smooth" }))
    },
    load: (page) => {
      dispatch(fetchStart({ page }))
    }
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination))