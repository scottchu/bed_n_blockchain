import { connect } from "react-redux"

import Input from "../../../components/Input"

import disable from "./disable"

const mapStateToProps = (state) => {
  const disabled = disable(state.session)

  return {
    name: "submit",
    type: "submit",
    value: "Continue",
    disabled
  }
}

export default connect(
  mapStateToProps,
  {}
)(Input)