import React from "react"

import Listings from "../../containers/Listings"
import ListingsPagination from "../../containers/ListingsPagination"

import { withStyle } from "../../common/css"
import style from "./style"

const ListingPage = ({ sytle }) => {
  return (
    <div className={style.container}>
      <div className={style.body}>
        <Listings />
      </div>
      <div className={style.footer}>
        <ListingsPagination />
      </div>
    </div>
  )
}

export default withStyle(style)(ListingPage)