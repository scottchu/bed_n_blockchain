import { connect } from "react-redux"

import SessionForm from "../../components/SessionForm"

import { signUp } from "../../actions/user"

const mapStateToProps = () => {
  return {
    title: "Sign Up"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(signUp())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
