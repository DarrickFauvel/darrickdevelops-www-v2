import Buttons from "./components/buttons"
import Heading from "./components/heading"
import Avatar from "./components/avatar"
import ScrollOffset from "../shared/ScrollOffset"
import Summary from "./components/summary"
import Container from "../shared/Container"

const About = () => {
  const classesContainer =
    "flex flex-col flex-wrap w-full mx-auto md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <section id="about">
      <ScrollOffset>
        <Container>
          {/* Show on small screen */}
          <div className="flex flex-col items-center md:hidden">
            <Heading />
            <Summary />
            <Avatar />
            <Buttons />
          </div>
          {/* Show on medium screen */}
          <div className="hidden md:flex md:flex-row md:justify-center md:gap-10">
            <div>
              <Heading />
              <Summary />
              <Buttons />
            </div>
            <div>
              <Avatar />
            </div>
          </div>
          {/* <div className={`${classesContainer} px-12`}>
            <Heading classModifier="hidden md:block" />
            <div className="flex flex-col md:flex-row mb-16 items-center text-center md:w-1/2 md:pr-16 md:items-start md:text-left lg:grow lg:pr-24 lg:mb-0 border border-1 border-green-400">
              <Heading classModifier="md:hidden" />
              <Summary />
              <Avatar classVisibilityModifier="md:hidden" />
              <Buttons classVisibilityModifier="md:hidden" />
            </div>
            <div>
              <Avatar classVisibilityModifier="hidden md:block" />
              <Buttons classVisibilityModifier="hidden md:block" />
            </div>
          </div> */}
        </Container>
      </ScrollOffset>
    </section>
  )
}

export default About
