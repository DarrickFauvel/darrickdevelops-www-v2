import Image from "next/image"
import avatar from "./avataaars.svg"

export default function Avatar({ classVisibilityModifier = null }) {
  return (
    <div className={`${classVisibilityModifier} hero-image`}>
      <Image className="hero-image__img" alt="hero" src={avatar} priority />
    </div>
  )
}
