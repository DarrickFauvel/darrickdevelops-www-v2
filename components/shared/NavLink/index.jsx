"use client"
import Link from "next/link"

const NavLink = ({ sectionTitle, setShowMenu }) => {
  const link = `/#${sectionTitle}`
  const title = sectionTitle[0].toUpperCase() + sectionTitle.slice(1)

  return (
    <Link
      href={link}
      className="transition duration-500 hover:text-white focus:text-white"
      onClick={setShowMenu ? () => setShowMenu(false) : null}>
      {title}
    </Link>
  )
}

export default NavLink
