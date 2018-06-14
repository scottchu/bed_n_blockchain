import PropTypes from "prop-types"

import address from "./address"
import account from "./account"

const propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  capacity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  address,
  account,

  inserted_at: PropTypes.string,
  updated_at: PropTypes.string
})

export default propTypes