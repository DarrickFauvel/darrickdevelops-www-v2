import Image from "next/image"

function ButtonImage({ className, attributes }) {
  return <Image className={className} {...attributes} width={32} height={32} />
}
export default ButtonImage
