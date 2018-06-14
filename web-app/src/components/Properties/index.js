import React from "react"
import { map } from "ramda"

import Pagination from "../../containers/Pagination"

import { withStyle } from "../../common/css"
import style from "./style"

const renderProperty = (PropertyComponent, className) => (property) => {
  return (
    <li className={className} key={property.id}>
      <PropertyComponent property={property} />
    </li>
  )
}

const Properties = ({ Property, fetch, properties, sytle }) => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <ul className={style.grid}>
          {map(renderProperty(Property, style.item), properties)}
        </ul>
      </div>
      <div className={style.footer}>
        <Pagination />
      </div>
    </div>
  )
}

export default withStyle(style)(Properties)