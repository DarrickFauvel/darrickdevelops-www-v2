import TechStack from "./TechStack"
import Image from "next/image"
import Link from "next/link"

const CardSmall = ({ project }) => {
  return (
    <>
      <Link href={`/projects/${project.slug}`}>
        <div className="bg-neutral-800 rounded-lg overflow-hidden transition duration-300 ease-in-out">
          {/* <div className="bg-purple-950">
            <h4 className="text-lg font-normal p-2">{project.title}</h4>
          </div> */}
          <div className="max-h-60 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              priority
            />
          </div>
          {/* <div className="flex flex-col items-center gap-2 p-5">
            <TechStack project={project} />
          </div> */}
        </div>
      </Link>
    </>
  )
}

export default CardSmall
