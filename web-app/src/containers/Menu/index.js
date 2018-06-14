import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Menu from "../../components/Menu"

const mapStateToProps = (state) => {
  return {
    signedIn: state.user.auth.signedIn
  }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(Menu))