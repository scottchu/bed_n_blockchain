import React from "react"

import {
  converge,
  identity,
  length,
  join,
  multiply,
  nth,
  path,
  pipe,
  prop
} from "ramda"

import { withStyle } from "../../common/css"
import style from "./style"

const name = prop("name")
const price = prop("price")
const type = prop("type")

const address = prop("address")
const city = path(["address", "city"])
const country = path(["address", "country"])

const placeholders = [
  "url(/images/placeholders/1.webp)",
  "url(/images/placeholders/2.webp)",
  "url(/images/placeholders/3.webp)",
  "url(/images/placeholders/4.webp)",
  "url(/images/placeholders/5.webp)",
  "url(/images/placeholders/6.webp)",
  "url(/images/placeholders/7.webp)"
]

const randomIndex = pipe(
  length,
  converge(multiply, [Math.random, Math.floor]),
  Math.floor
)

const sample = converge(nth, [randomIndex, identity])

const dot = join(" · ")
const space = join(" ")

const Property = ({ property, style }) => {
  const location = space([city(property), country(property)])
  const info = dot([type(property), location])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div
          className={style.image}
          style={{ backgroundImage: sample(placeholders) }} />
      </div>
      <div className={style.content}>
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
    </div>
  )
}

export default withStyle(style)(Property)