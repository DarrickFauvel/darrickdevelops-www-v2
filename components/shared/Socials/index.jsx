import { Icon } from "@iconify/react"

const Socials = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <a
        className="block transition hover:text-white focus:text-white"
        href="https://www.linkedin.com/in/DarrickFauvel"
        target="_blank"
        rel="noopener noreferrer"
        title="Find me on LinkedIn">
        <Icon className="text-4xl" icon="fa6-brands:linkedin" />
      </a>

      <a
        className="block transition hover:text-white focus:text-white"
        href="https://github.com/DarrickFauvel"
        target="_blank"
        rel="noopener noreferrer"
        title="See me on GitHub">
        <Icon className="text-4xl" icon="fa6-brands:square-github" />
      </a>
    </div>
  )
}

export default Socials
