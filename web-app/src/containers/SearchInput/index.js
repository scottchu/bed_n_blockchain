import { connect } from "react-redux"

import SearchInput from "../../components/SearchInput"

import { inputFocus, inputBlur, inputUpdate, search } from "../../actions/search"

const mapStateToProps = ({ search: { input } }) => {
  return {
    placeholder: "Where would you like to go?",
    ...input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFocus: () => dispatch(inputFocus()),
    onBlur: () => dispatch(inputBlur()),
    onChange: (value) => dispatch(inputUpdate(value)),
    onSubmit: () => dispatch(search())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)
