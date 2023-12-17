"use client"
import { Icon } from "@iconify/react"
import { useRef } from "react"
import NavLink from "@/components/shared/NavLink"
import Socials from "@/components/shared/Socials"
import sectionTitles from "@/components/shared/sectionTitles"
import useOnClickOutside from "@/hooks/useOnClickOutside"

const Menu = ({ showMenu, setShowMenu }) => {
  const navRef = useRef()
  useOnClickOutside(navRef, () => setShowMenu(false))

  return (
    <div
      className={`absolute top-0 right-0 text-2xl flex flex-col gap-4 bg-gray-800 pt-12 pb-4 px-6 transition duration-200 ease-in-out ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
      ref={navRef}>
      <div
        className="absolute top-4 right-3 self-end text-2xl leading-4 cursor-pointer"
        onClick={() => setShowMenu(false)}>
        <Icon icon="mingcute:close-fill" />
      </div>

      {sectionTitles.map((sectionTitle) => (
        <NavLink
          sectionTitle={sectionTitle}
          key={sectionTitle}
          setShowMenu={() => setShowMenu(false)}
        />
      ))}

      <Socials />
    </div>
  )
}

export default Menu
