// "use client"
// import { useState, useEffect } from "react"
// import { projects as data, tabs } from "@/public/data/data"
// import Tabs from "./Tabs"
import Projects from "./Projects"
import { Icon } from "../Elements/Icon"

async function getProjects() {
  const response = await fetch("http://localhost:3000/data/projects.json")
  const jsonData = await response.json()
  console.log(jsonData)
  return jsonData
}

const filterProjects = async (category) => {
  const results = await getProjects().filter((project) => {
    if (category === "featured") {
      return project.isFeatured
    } else {
      return project.category.includes(category)
    }
  })
  // setFilteredProjects(results)
  console.log(results)
  return results
}

const Portfolio = async () => {
  // const [projects, setProjects] = useState(data)
  // const [activeTab, setActiveTab] = useState("Featured")
  // const [filteredProjects, setFilteredProjects] = useState([])
  const projects = await getProjects()
  const filteredProjects = await filterProjects("react")

  // const handleTabClick = (e) => {
  //   const selectedTab = e.target.innerText
  //   const selectedCategory = e.target.dataset.category
  //   setActiveTab(selectedTab)
  //   filterProjects(selectedCategory)
  // }

  // useEffect(() => {
  //   filterProjects("featured")
  // }, [])

  return (
    <section id="portfolio" className="projects">
      <div className="container projects-container">
        <div className="flex flex-col items-center w-full mb-6">
          <Icon icon="fa6-solid:code" variant="section" />

          <h1 className="text-3xl leading-9 font-medium sm:text-4xl sm:leading-10">
            Projects I've Built
          </h1>
          <p className="mx-auto leading-6 lg:w-2/3">
            Some of my favorite projects.
          </p>
        </div>

        {/* <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        /> */}

        <div className="tab-content tab-content--sections">
          {/* <Projects
            // projects={projects}
            projects={filteredProjects}
            activeTab={activeTab}
            tabs={tabs}
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
