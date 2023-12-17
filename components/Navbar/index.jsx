"use client"
import { useState } from "react"

import Brand from "./Brand"
import Nav from "./Nav"
import Socials from "../shared/Socials"
import Burger from "./Burger"
import Menu from "./Burger/Menu"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex flex-row justify-between items-center p-4 sm:p-10">
      <Brand />
      <Nav />
      <div className="hidden min-[520px]:flex">
        <Socials />
      </div>

      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default Navbar
