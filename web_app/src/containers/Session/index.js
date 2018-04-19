import { connect } from "react-redux"

import Session from "../../components/Session"

import { create } from "../../actions/user/session"

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(create())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Session)
