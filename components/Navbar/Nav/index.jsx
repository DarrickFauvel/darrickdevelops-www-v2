import NavLink from "@/components/shared/NavLink"
import sectionTitles from "@/components/shared/sectionTitles"

const Nav = () => {
  return (
    <nav className="hidden flex-wrap items-center justify-center text-base gap-5 min-[575px]:flex min-[575px]:mr-auto min-[520px]:ml-4 min-[520px]:py-1 min-[520px]:pl-4 min-[520px]:border-l-[1px] min-[520px]:border-solid min-[520px]:border-zinc-600">
      {sectionTitles.map((sectionTitle) => (
        <NavLink sectionTitle={sectionTitle} key={sectionTitle} />
      ))}
    </nav>
  )
}

export default Nav
