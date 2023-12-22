import { useState } from "react"
import TechStack from "./TechStack"
import Image from "next/image"
import Link from "next/link"

const CardSmall = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(false)
  }

  return (
    <>
      <Link href={`/project/${project.slug}`}>
        <div className="bg-neutral-800 border-[1px] border-purple-950 rounded-md overflow-hidden w-48 cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow hover:shadow-green-700 focus:-translate-y-1 focus:shadow-md focus:shadow-green-700">
          <div className="bg-purple-950">
            <h4 className="text-lg font-normal p-2">{project.title}</h4>
          </div>
          <div className="max-h-48 overflow-hidden border-y-[1px]">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-2 p-5">
            <TechStack project={project} />
          </div>
        </div>
      </Link>

      {/* <Modal
        project={project}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      /> */}
    </>
  )
}

export default CardSmall
