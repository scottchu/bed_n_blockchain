import { connect } from "react-redux"

import SessionForm from "../../components/SessionForm"

import { signIn } from "../../actions/user"

const mapStateToProps = () => {
  return {
    title: "Sign In"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(signIn())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
