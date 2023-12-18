import Image from "next/image"
import Buttons from "./Buttons"
import avatar from "./avataaars.svg"

const About = () => {
  const classesContainer =
    "flex flex-col items-center flex-wrap w-full mx-auto md:flex-row md:justify-center md:max-w-3xl lg:max-w-5xl"

  return (
    <section id="about" className="mt-28 sm:mt-40">
      <div className={`${classesContainer} px-12 py-20 md:flex-row`}>
        <div className="flex flex-col mb-16 items-center text-center md:w-1/2 md:pr-16 md:items-start md:text-left lg:grow lg:pr-24 lg:mb-0">
          <h1 className="text-3xl leading-9 mb-4 font-medium sm:text-4xl sm:leading-10">
            Hi, I'm Darrick.
            <br className="inline-block" /> I build web apps.
          </h1>
          <p className="mb-8 leading-7">
            I love coding things from scratch with HTML, CSS, JavaScript, and
            using the latest library/framework to help get the job done. I'm
            quietly confident, naturally curious, and perpetually working on
            improving my chops one dev challenge at a time.
          </p>
          <Buttons />
        </div>

        <div className="hero-image">
          <Image className="hero-image__img" alt="hero" src={avatar} priority />
        </div>
      </div>
    </section>
  )
}

export default About
