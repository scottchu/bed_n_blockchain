import PropTypes from "prop-types"

const propTypes = PropTypes.shape({
  token: PropTypes.string,
  signedIn: PropTypes.bool.isRequired
})

export default propTypes