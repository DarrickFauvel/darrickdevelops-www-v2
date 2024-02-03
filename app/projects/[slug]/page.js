import Image from "next/image"
import Back from "../components/Back"
import { getProject } from "@/lib/getData"
import Container from "@/components/shared/Container"

export default async function Project({ params }) {
  const project = getProject(params.slug)

  return (
    <section className="mt-24">
      <Container>
        <Back />

        <h1 className="text-2xl font-normal p-4">{project.titleLong}</h1>
        <Image
          className="rounded-lg"
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />
        <p className="flex justify-center self-center text-center -mt-4 text-sm font-mono">
          {/* {project.stack.map((item) => {
            const lastItem = project.stack[project.stack.length - 1]
            return item !== lastItem ? `${item} · ` : item
          })} */}
        </p>
        <ul className="flex justify-center items-center gap-6 list-none p-0 mb-5">
          <li>
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
          </li>
          <li>
            <a
              className="flex items-center gap-2 bg-gray-800 py-2 px-6 rounded border-[1px] border-gray-700 transition duration-500 hover:bg-gray-700 hover:text-white"
              href={project.repoUrl}
              target="_blank">
              <Image
                className="invert-[.75]"
                src="/github-icon-logo-png-transparent.png"
                alt="GitHub logo"
                width={32}
                height={32}
              />
              <span>Code</span>
            </a>
          </li>
        </ul>
        <div className="bg-neutral-700 rounded p-4 pb-1">
          <header className="text-center border-[1px] border-dashed border-neutral-400 pb-1 -mt-2 mb-4 bg-transparent">
            ABOUT THIS PROJECT
          </header>
          <p>
            <span>Client</span>
            {project.client}
          </p>
          <p>
            <span>Goal</span>
            {project.description.goal}
          </p>
          {project.description.inspiration && (
            <p>
              <span>Inspiration</span>
              {project.description.inspiration}
            </p>
          )}
          {project.description.challenge && (
            <p>
              <span>Challenge</span>
              {project.description.challenge}
            </p>
          )}
          {project.description.solution && (
            <p>
              <span>Solution</span>
              {project.description.solution}
            </p>
          )}
          {project.description.future && (
            <p>
              <span>Future Feature</span>
              {project.description.future}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
