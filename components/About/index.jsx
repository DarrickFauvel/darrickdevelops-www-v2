import Buttons from "./components/buttons"
import Heading from "./components/heading"
import Avatar from "./components/avatar"
import ScrollOffset from "../shared/ScrollOffset"

const About = () => {
  const classesContainer =
    "flex flex-col flex-wrap w-full mx-auto md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <section id="about">
      <ScrollOffset>
        <div className={`${classesContainer} px-12`}>
          <Heading classModifier="hidden md:block" />
          <div className="flex flex-col md:flex-row mb-16 items-center text-center md:w-1/2 md:pr-16 md:items-start md:text-left lg:grow lg:pr-24 lg:mb-0">
            <Heading classModifier="md:hidden" />
            <p className="mb-8 leading-7 text-justify">
              I love coding things from scratch with HTML, CSS, JavaScript, and
              using the latest library/framework to help get the job done. I'm
              quietly confident, naturally curious, and perpetually working on
              improving my chops one dev challenge at a time.
            </p>
            <Avatar classVisibilityModifier="md:hidden" />
            <Buttons classVisibilityModifier="md:hidden" />
          </div>
          <Avatar classVisibilityModifier="hidden md:block" />
          <Buttons classVisibilityModifier="hidden md:block" />
        </div>
      </ScrollOffset>
    </section>
  )
}

export default About
