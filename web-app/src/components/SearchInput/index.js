import React from "react"
import PropTypes from "prop-types"

import { target } from "../../common/event"

import { withStyle } from "../utils/classNames"
import style from "./style"

const SearchInput = ({
  focusing,
  onBlur,
  onFocus,
  onChange,
  onSubmit,
  placeholder,
  style,
  value
}) => {
  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.input}
        placeholder={focusing ? "" : placeholder}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={(e) => onChange(target.value(e))}
        onKeyPress={(e) => (e.key == "Enter") && onSubmit()}/>
    </div>
  )
}

SearchInput.defaultProps = {
  focusing: false,
  placeholder: ""
}

SearchInput.proptypes = {
  focusing: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired
}

export default withStyle(style)(SearchInput)