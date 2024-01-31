import Image from "next/image"
import avatar from "./avataaars.svg"

export default function Avatar() {
  return <Image alt="hero" src={avatar} priority />
}
