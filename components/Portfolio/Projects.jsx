import { useState } from "react"
import Card from "./CardSmall"

const Projects = ({ projects, activeTab, tabs }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projectsInReverseOrder = projects.slice(0).reverse()

  const cardsTitle = tabs.find((tab) => {
    return tab.title.toLowerCase() === activeTab.toLowerCase()
  })

  return (
    <>
      <h3 className="text-gray-100 font-medium text-2xl">
        {cardsTitle.subtitle}
      </h3>
      <div className="flex justify-center flex-wrap gap-12">
        {projectsInReverseOrder.map((project) => {
          return <Card project={project} key={project.id} />
        })}
      </div>
      {/* END cards */}
    </>
  )
}

export default Projects
