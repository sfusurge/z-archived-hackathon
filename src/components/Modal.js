import { useEffect, useState, useRef } from "react"
import _ from "lodash"

import styles from "../css/Modal.module.css"

import { ReactComponent as Close } from "../assets/modal/close.svg"
import { ReactComponent as Maximize } from "../assets/modal/maximize.svg"
import { ReactComponent as Minimize } from "../assets/modal/minimize.svg"
import { ReactComponent as ScrollUp } from "../assets/scroll/scroll-up.svg"
import { ReactComponent as ScrollDown } from "../assets/scroll/scroll-down.svg"


const Modal = ({ children, title }) => {
  const [nodeLocation, setNodeLocation] = useState({ x: 0, y: 0 })
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const registerMouse = event => {
    if (event.button !== 0) return
    event.preventDefault()
    event.stopPropagation()
    setDragging(true)
    setMouseLocation({
      x: event.clientX,
      y: event.clientY
    })
  }

  const unRegisterMouse = event => {
    event.preventDefault()
    event.stopPropagation()
    setDragging(false)
  }

  const mouseMoveHandler = _.throttle(event => {
    event.preventDefault()
    event.stopPropagation()
    setMouseLocation({
      x: event.clientX,
      y: event.clientY
    })
    setNodeLocation({
      x: nodeLocation.x - (mouseLocation.x - event.clientX),
      y: nodeLocation.y - (mouseLocation.y - event.clientY)
    })
  }, 15)


  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', unRegisterMouse)
      return () => {
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', unRegisterMouse)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging])

  return (
    <div
      className={styles.container}
      style={{
        left: `${nodeLocation.x}px`,
        top: `${nodeLocation.y}px`
      }}
    >
      <div className={styles.main}>
        {children}
        <div className={styles.scroll}>
          <ScrollUp className={styles.scrollUp} />
          <ScrollDown className={styles.scrollDown} />
        </div>
      </div>
      <div className={styles.topBar} onMouseDown={registerMouse}>
        <p className={styles.title}>{title}</p>
        <div className={styles.topButtons} >
          <Minimize className={styles.minimize} />
          <Maximize className={styles.maximize} />
          <Close className={styles.close} />
        </div>
      </div>
    </div>
  )
}

export default Modal