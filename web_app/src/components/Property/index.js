import React from "react"


import { withStyle } from "../../common/css"
import style from "./style"

const backgroundImages = [
  "url(/images/placeholders/1.webp)",
  "url(/images/placeholders/2.webp)",
  "url(/images/placeholders/3.webp)",
  "url(/images/placeholders/4.webp)",
  "url(/images/placeholders/5.webp)",
  "url(/images/placeholders/6.webp)",
  "url(/images/placeholders/7.webp)"
]

const backgroundImage = () => {
  const i = Math.floor(Math.random() * Math.floor(7))
  return backgroundImages[i]
}

const Property = ({ property, style }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.image}
          style={{ backgroundImage: backgroundImage() }}/>
      </div>
      <div className={style.body}>

      </div>
    </div>
  )
}

export default withStyle(style)(Property)