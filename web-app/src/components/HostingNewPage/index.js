import React from "react"

import PropertyForm from "../../containers/PropertyForm"

import { withStyle } from "../utils/classNames"
import style from "./style"

const HostingNewPage = ({ sytle }) => {
  return (
    <div className={style.container}>
      <PropertyForm />
    </div>
  )
}

export default withStyle(style)(HostingNewPage)