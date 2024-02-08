import Image from "next/image"
import Back from "../components/Back"
import { getProject } from "@/lib/getData"
import Container from "@/components/shared/Container"
import ButtonGroup from "../components/ButtonLinksGroup"
import ButtonLink from "../components/ButtonLink"
import ButtonImage from "../components/ButtonImage"

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
          priority
        />
        {/* <p className="flex justify-center self-center text-center -mt-4 text-sm font-mono">
          {project.stack.map((item) => {
            const lastItem = project.stack[project.stack.length - 1]
            return item !== lastItem ? `${item} · ` : item
          })}
        </p> */}
        <ButtonGroup>
          <ButtonLink link={project.liveUrl}>
            <ButtonImage
              attributes={{
                src: "/netlify-logo-cropped.png",
                alt: "Netlify logo",
              }}
            />
            <span>Demo</span>
          </ButtonLink>

          <ButtonLink link={project.repoUrl}>
            <ButtonImage
              className="invert-[.75]"
              attributes={{
                src: "/github-icon-logo-png-transparent.png",
                alt: "GitHub logo",
              }}
            />
            <span>Code</span>
          </ButtonLink>
        </ButtonGroup>
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
