import PropTypes from "prop-types"

const propTypes = PropTypes.shape({
  street1: PropTypes.string.isRequired,
  street2: PropTypes.string,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired
})

export default propTypes