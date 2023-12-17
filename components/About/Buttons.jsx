import Link from "next/link"

const Buttons = () => {
  const classesButton =
    "inline-flex transition-all duration-500 border-0 py-2 px-6 rounded-md text-lg leading-7 focus:outline-none"
  const classesContact =
    "bg-green-500 active:text-white visited:text-white hover:bg-green-700"
  const classesProjects =
    "text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white"

  return (
    <div className="grid gap-5 min-[430px]:grid-cols-2 justify-center">
      <Link href="/#contact" className={`${classesButton} ${classesContact}`}>
        Work With Me
      </Link>
      <Link
        href="/#portfolio"
        className={`${classesButton} ${classesProjects}`}>
        See My Work
      </Link>
    </div>
  )
}
export default Buttons
