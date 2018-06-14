import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserDropdownMenu from "../../../components/Menu/UserDropdownMenu"

const mapStateToProps = (state) => {
  return {
    scrolling: state.browser.scrolling
  }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(UserDropdownMenu))