"use client"
import { Icon } from "@iconify/react"

const Burger = ({ showMenu, setShowMenu }) => {
  // if (showMenu) {
  //   return (
  //     <span
  //       className={classes.burger}
  //       onClick={() => setShowMenu((prevState) => !prevState)}>
  //       <Icon name="close" />
  //     </span>
  //   )
  // }
  return (
    <span
      className="text-2xl leading-4 cursor-pointer min-[520px]:hidden"
      onClick={() => {
        setShowMenu((prevState) => !prevState)
        console.log("burger clicked")
      }}>
      <Icon icon="fa6-solid:bars" />
    </span>
  )
}

export default Burger
