import React from "react"
import { map } from "ramda"

import Pagination from "../../containers/Pagination"
import Property from "../Property"

import { withStyle } from "../../common/css"
import style from "./style"

const renderProperty = (className) => (property) => {
  return (
    <li className={className} key={property.id}>
      <Property property={property} />
    </li>
  )
}

const Properties = ({ fetch, properties, sytle }) => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <ul className={style.grid}>
          {map(renderProperty(style.item), properties)}
        </ul>
      </div>
      <div className={style.footer}>
        <Pagination />
      </div>
    </div>
  )
}

export default withStyle(style)(Properties)