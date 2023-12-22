"use client"
import { Icon as IconifyIcon } from "@iconify/react"

export const Icon = ({ icon, variant }) => {
  let classesVariant = ""
  switch (variant) {
    case "section":
      classesVariant = "inline-block text-5xl mx-auto mb-4 text-fuchsia-800"
      break
    case "list":
      classesVariant = "text-green-400 w-6 h-6 shrink-0 mr-4"
      break

    default:
      break
  }

  return <IconifyIcon className={classesVariant} icon={icon} />
}
