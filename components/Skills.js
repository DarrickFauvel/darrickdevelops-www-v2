import { skills } from "@/data/data"
import { Icon } from "./Elements/Icon"
import ScrollOffset from "./shared/ScrollOffset"

const Skills = () => {
  const classesContainer =
    "flex flex-col items-center flex-wrap w-full mx-auto md:flex-row md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <section id="skills">
      <ScrollOffset>
        <div className={`${classesContainer} px-5`}>
          <div className="text-center mb-12">
            <Icon icon="heroicons-solid:chip" variant="section" />
            <h1 className="text-3xl leading-9 font-medium mb-4 sm:text-4xl sm:leading-10">
              Skills &amp; Technologies
            </h1>
            <p className="leading-6 mx-auto">
              Just some of the things in my technical toolkit.
            </p>
          </div>
          <div className="flex flex-wrap -mx-2 sm:mx-auto sm:mb-4 md:w-[80%]">
            {skills.map((skill) => (
              <div key={skill} className="p-2 w-full sm:w-1/2">
                <div className="flex items-center bg-gray-800 rounded p-4 h-full">
                  <Icon icon="heroicons-solid:badge-check" variant="list" />
                  <span className="font-medium text-white">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollOffset>
    </section>
  )
}

export default Skills
