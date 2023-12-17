import { useState, useEffect } from "react"
import classes from "./totopbutton.module.css"
import { useRef } from "react"

const ToTopButton = () => {
  const [windowPos, setWindowPos] = useState(0)
  const buttonRef = useRef()

  const goToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        buttonRef.current.style.display = "block"
      } else {
        buttonRef.current.style.display = "none"
      }
    }

    window.onscroll = function () {
      scrollFunction()
    }
  }, [])

  return (
    <button onClick={goToTop} ref={buttonRef} title="Go to top">
      Top
    </button>
  )
}
export default ToTopButton
