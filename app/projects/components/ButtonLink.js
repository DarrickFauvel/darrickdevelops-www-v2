import Image from "next/image"

function ButtonLink({ link, children }) {
  return (
    <a
      className="flex items-center gap-2 bg-gray-800 py-2 px-6 rounded border-[1px] border-gray-700 transition duration-500 hover:bg-gray-700 hover:text-white"
      href={link}
      target="_blank">
      {children}
    </a>
  )
}
export default ButtonLink
