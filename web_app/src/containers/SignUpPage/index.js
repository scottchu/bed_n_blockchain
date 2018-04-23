import { connect } from "react-redux"

import SessionForm from "../../components/SessionForm"

import { signUp } from "../../actions/user"

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(signUp())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SessionForm)
