import Projects from "./Projects"
import { Icon } from "../Elements/Icon"
import { getProjects } from "@/lib/getData"
import ScrollOffset from "../shared/ScrollOffset"
import Container from "../shared/Container"

async function getAllProjects() {
  const projects = await getProjects()
  return projects
}

const filterProjects = async (category) => {
  const projects = await getAllProjects()
  const filteredResults = projects.filter((project) => {
    if (category === "featured") {
      return project.isFeatured
    } else {
      return project.category.includes(category)
    }
  })
  console.log(filteredResults)
  return filteredResults
}

const Portfolio = async () => {
  const filteredProjects = await filterProjects("featured")

  return (
    <section id="portfolio" className="projects">
      <ScrollOffset>
        <Container>
          <div className="container projects-container">
            <div className="flex flex-col items-center w-full mb-6">
              <Icon icon="fa6-solid:code" variant="section" />
              <h1 className="text-3xl leading-9 font-medium sm:text-4xl sm:leading-10">
                Projects I've Built
              </h1>
              <p className="text-center mx-auto leading-6 lg:w-2/3">
                A few of my favorite projects.
              </p>
            </div>
            <div className="tab-content tab-content--sections">
              <Projects projects={filteredProjects} />
            </div>
          </div>
        </Container>
      </ScrollOffset>
    </section>
  )
}

export default Portfolio
