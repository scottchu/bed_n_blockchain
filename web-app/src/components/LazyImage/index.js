import React, { Component } from "react"
import { fromEvent } from "rxjs"
import { tap, mapTo } from "rxjs/operators"

import { withStyle } from "../utils/classNames"
import style from "./style"

class LazyImage extends Component {

  state = {
    loadedSrc: undefined
  }

  load = ({ src }) => {
    const image = new Image()

    fromEvent(image, "load")
      .pipe(
        mapTo({ loadedSrc: src }),
        tap((state) => this.setState(state))
      )
      .subscribe()

    image.src = src
  }

  componentDidMount() {
    this.load(this.props)
  }

  render() {
    const { className, classNames, placeholderClassName, placeholder, style } = this.props
    const { loadedSrc } = this.state

    return (
      <div className={style.container}>
        <div
          className={classNames(
            className,
            style.image,
            loadedSrc && style.loaded,
          )}
          style={{ backgroundImage: `url(${loadedSrc})` }} />
        <div
          className={classNames(
            placeholderClassName,
            style.placeholder,
            loadedSrc && style.loaded
          )}
          style={{ backgroundImage: `url('${placeholder}')` }} />
      </div>
    )
  }
}

export default withStyle(style)(LazyImage)