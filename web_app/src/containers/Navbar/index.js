import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Navbar from "../../components/Navbar"

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.auth.signedIn
  }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(Navbar))