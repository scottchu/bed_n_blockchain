import { connect } from "react-redux"

import Input from "../../../components/Input"

import { updateForm } from "../../../actions/session"

import { target } from "../../../common/event"

const mapStateToProps = (state) => {
  const field = state.session.form.password

  return {
    name: "password",
    label: "Password",
    placeholder: "(minimum 6 characters)",
    type: "password",
    value: field.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => dispatch(updateForm("password", target.value(e)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)