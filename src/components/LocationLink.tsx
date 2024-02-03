import { GlobeIcon } from "lucide-react"
import React from "react"

interface LocationLinkProps {
  location: string
  locationLink: string
}

export const LocationLink: React.FC<LocationLinkProps> = ({
  location,
  locationLink,
}) => {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground tracking-tight">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline hover:underline-offset-2"
        href={locationLink}
        target="_blank"
      >
        <GlobeIcon className="h-3 w-3" />
        {location}
      </a>
    </p>
  )
}
