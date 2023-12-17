"use client"
import { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
// import { CodeIcon } from "@heroicons/react/solid"
import { projects as data, tabs } from "@/data/data"
import Tabs from "./Tabs"
import Projects from "./Projects"

const Portfolio = () => {
  const [projects, setProjects] = useState(data)
  const [activeTab, setActiveTab] = useState("Featured")
  const [filteredProjects, setFilteredProjects] = useState([])

  const filterProjects = (category) => {
    const results = projects.filter((project) => {
      if (category === "featured") {
        return project.isFeatured
      } else {
        return project.category.includes(category)
      }
    })
    setFilteredProjects(results)
  }

  const handleTabClick = (e) => {
    const selectedTab = e.target.innerText
    const selectedCategory = e.target.dataset.category
    setActiveTab(selectedTab)
    filterProjects(selectedCategory)
  }

  useEffect(() => {
    filterProjects("featured")
  }, [])

  return (
    <section id="portfolio" className="projects">
      <div className="container projects-container">
        <div className="flex flex-col items-center w-full mb-6">
          {/* <CodeIcon className="section-head--icon" /> */}
          <Icon
            className="inline-block text-5xl mx-auto mb-4 text-fuchsia-800"
            icon="fa6-solid:code"
          />
          <h1 className="text-3xl leading-9 font-medium sm:text-4xl sm:leading-10">
            Projects I've Built
          </h1>
          <p className="mx-auto leading-6 lg:w-2/3">
            Some of my favorite projects.
          </p>
        </div>

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />

        <div className="tab-content tab-content--sections">
          <Projects
            projects={filteredProjects}
            activeTab={activeTab}
            tabs={tabs}
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
