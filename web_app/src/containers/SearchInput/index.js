import { connect } from "react-redux"

import SearchInput from "../../components/SearchInput"

const mapStateToProps = () => {
  return {
    placeholder: "Where would you like to go?"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)
