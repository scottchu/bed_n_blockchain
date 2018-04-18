import { connect } from "react-redux"

import Input from "../../../components/Input"

import { updateForm } from "../../../actions/user/session"

import { targetValue } from "../../../common/events"

const mapStateToProps = (state) => {
  const field = state.user.session.form.email

  return {
    name: "email",
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    value: field.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(updateForm("email", targetValue(e)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)