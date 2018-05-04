import { connect } from "react-redux"

import SessionForm from "../../components/SessionForm"

import { signIn } from "../../actions/user"

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(signIn())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SessionForm)
