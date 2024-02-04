import Image from "next/image"

function ButtonLink({ children, project }) {
  return (
    <a
      className="flex items-center gap-2 bg-gray-800 py-2 px-6 rounded border-[1px] border-gray-700 transition duration-500 hover:bg-gray-700 hover:text-white"
      href={project.liveUrl}
      target="_blank">
      
      {children}
    </a>
  )
}
export default ButtonLink
