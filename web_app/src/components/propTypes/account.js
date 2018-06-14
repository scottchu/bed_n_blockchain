import PropTypes from "prop-types"

const propTypes = PropTypes.shape({
  email: PropTypes.string.isRequired,
  inserted_at: PropTypes.string
})

export default propTypes