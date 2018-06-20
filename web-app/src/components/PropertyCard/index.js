import React from "react"
import PropTypes from "prop-types"

import LazyImage from "../LazyImage"

import propertyPropTypes from "../propTypes/property"

import { name, price, type, address, city, country, dot, space } from "./utils"

import placeholders from "./placeholders"
import sample from "./sample"

import { withStyle } from "../utils/classNames"
import style from "./style"

const Property = ({ book, property, style }) => {
  const location = space([city(property), country(property)])
  const info = dot([type(property), location])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <LazyImage
          className={style.image}
          src={sample(placeholders)}
          placeholder={"/images/placeholders/0.gif"}
          placeholderClassName={style.image} />

      </div>
      <div className={style.content}>
        <div className={style.left}>
          <div className={style.info}>
            {info}
          </div>

          <div className={style.name}>
            {name(property)}
          </div>
          <div className={style.price}>
            ${price(property)} per night
          </div>
        </div>
        <div className={style.right}>
            <button
              className={style.bookButton}
              onClick={book}>
              Book
            </button>
        </div>
      </div>
    </div>
  )
}

Property.propTypes = {
  book: PropTypes.func.isRequired,
  property: propertyPropTypes.isRequired
}

export default withStyle(style)(Property)