import { connect } from "react-redux"

import Input from "../../../components/Input"

import { updateForm } from "../../../actions/session"

import { target } from "../../../common/event"

const mapStateToProps = (state) => {
  const field = state.session.form.email

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
    onChange: (e) => dispatch(updateForm("email", target.value(e)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)