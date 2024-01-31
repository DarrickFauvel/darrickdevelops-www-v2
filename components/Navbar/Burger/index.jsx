"use client"
import { Icon } from "@iconify/react"

const Burger = ({ showMenu, setShowMenu }) => {
  return (
    <span
      className="text-2xl leading-4 cursor-pointer min-[575px]:hidden"
      onClick={() => {
        setShowMenu((prevState) => !prevState)
      }}>
      <Icon icon="fa6-solid:bars" />
    </span>
  )
}

export default Burger
