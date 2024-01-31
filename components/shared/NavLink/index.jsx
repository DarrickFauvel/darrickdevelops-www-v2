"use client"

const NavLink = ({ sectionTitle, setShowMenu }) => {
  const link = `#${sectionTitle}`
  const title = sectionTitle[0].toUpperCase() + sectionTitle.slice(1)

  return (
    <a
      href={link}
      className="transition duration-500 hover:text-white focus:text-white"
      onClick={setShowMenu ? () => setShowMenu(false) : null}>
      {title}
    </a>
  )
}

export default NavLink
