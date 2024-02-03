import Image from "next/image"

function ButtonLink() {
  return (
    <a
      className="flex items-center gap-2 bg-gray-800 py-2 px-6 rounded border-[1px] border-gray-700 transition duration-500 hover:bg-gray-700 hover:text-white"
      href={project.liveUrl}
      target="_blank">
      <Image
        src="/netlify-logo-cropped.png"
        alt="Netlify logo"
        width={32}
        height={32}
      />
      <span>Demo</span>
    </a>
  )
}
export default ButtonLink
