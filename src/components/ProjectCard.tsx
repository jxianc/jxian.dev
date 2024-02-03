import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
} from "./ui/card"
import { Badge } from "./ui/badge"
import { ArrowUpRightFromSquare, FileText } from "lucide-react"
import { GitHubIcon } from "./icons/GitHubIcon"

interface Props {
  title: string
  description: string
  tags: readonly string[]
  link?: string
  source?: string
}

export function ProjectCard({ title, description, tags, link, source }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-zinc-200/80 p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="md:text-base text-sm">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                {title}{" "}
                <span className="h-1 w-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="text-xs font-mono text-muted-foreground">
          {description}
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          {source && (
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground tracking-tight">
              <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-x-1 align-baseline leading-none hover:underline hover:underline-offset-2"
              >
                <GitHubIcon className="h-3 w-3" />
                source
              </a>
            </p>
          )}
        </div>
        <div className="mt-0.5 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge className="px-1 py-0 text-[10px]" variant="skill" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
