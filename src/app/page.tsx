import { LocationLink } from "@/components/LocationLink"
import { ProjectCard } from "@/components/ProjectCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { resumeData } from "@/data/resume-data"
import { FileText, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <div className="min-h-screen max-w-2xl mx-auto pt-8 md:pt-20 px-4 pb-10 flex flex-col space-y-6">
        <section>
          <h1 className="md:text-2xl font-bold">{resumeData.name}</h1>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col space-y-2">
              <h2 className="font-mono text-xs md:text-sm text-muted-foreground pt-2">
                {resumeData.title}
              </h2>
              <div className="flex flex-col space-y-0.5">
                <LocationLink
                  location={resumeData.location}
                  locationLink={resumeData.locationLink}
                />
                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground tracking-tight">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline hover:underline-offset-2"
                  >
                    <FileText className="h-3 w-3" />
                    Resume
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-2">
                <a href={`mailto:${resumeData.email}`} target="_blank">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
                {resumeData.socials.map((social) => (
                  <a href={social.url} target="_blank" key={social.name}>
                    <Button variant="outline" size="icon">
                      <social.icon className="h-4 w-4" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            <Avatar className="h-28 w-28">
              <AvatarImage src="/profile.jpeg" alt={resumeData.name} />
              <AvatarFallback>{resumeData.initials}</AvatarFallback>
            </Avatar>
          </div>
        </section>

        <section>
          <div className="text-black md:text-lg font-bold">About</div>
          <h3 className="text-muted-foreground font-mono text-xs">
            {resumeData.about}
          </h3>
        </section>

        <section>
          <div className="text-black md:text-lg font-bold">Education</div>
          <div>
            {resumeData.education.map((education) => (
              <div key={education.schoool}>
                <div className="flex md:flex-row flex-col justify-between md:items-center">
                  <p className="text-black text-sm md:text-base font-semibold">
                    {education.schoool}
                  </p>
                  <LocationLink
                    location={education.location}
                    locationLink={education.locationLink}
                  />
                </div>
                <div className="flex md:flex-row flex-col md:justify-between md:items-center">
                  <p className="text-muted-foreground font-mono text-xs">
                    {education.degree}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {education.startDate} - {education.endDate}
                  </p>
                </div>
                {/* <p className="text-xs underline underline-offset-4 font-mono text-muted-foreground flex flex-row items-end space-x-0.5 hover:cursor-pointer">
                  <a href="">more</a>
                  <ArrowUpRightFromSquare className="h-3 w-3" />
                </p> */}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-black md:text-lg font-bold">Work Experience</div>
          <div className="flex flex-col space-y-2">
            {resumeData.workExperience.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-row justify-between items-end">
                  <div className="inline-flex flex-wrap items-center gap-x-1">
                    <p className="text-black text-sm md:text-base font-semibold">
                      {exp.company}
                    </p>
                    {exp.tags &&
                      exp.tags.map((tag) => (
                        <Badge key={tag} variant="work">
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  <LocationLink
                    location={exp.location}
                    locationLink={exp.locationLink}
                  />
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs md:text-sm font-mono font-medium">
                    {exp.position}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <p className="text-xs font-mono text-muted-foreground leading-tight mt-1">
                  {exp.summary}
                </p>
                {/* <p className="text-xs underline underline-offset-4 font-mono text-muted-foreground flex flex-row items-end space-x-0.5 hover:cursor-pointer">
                  <a href="">more</a>
                  <ArrowUpRightFromSquare className="h-3 w-3" />
                </p> */}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-black md:text-lg font-semibold">Projects</div>
          <div className="grid md:grid-cols-2 gap-2 mt-1">
            {resumeData.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.demo}
                source={project.source}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="text-black text-xl font-bold">Skills</div>
          <div className="flex flex-wrap gap-y-1.5 gap-x-2 mt-1">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <>
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={
                      category == "languages"
                        ? "languages"
                        : category == "technologies"
                          ? "technologies"
                          : "skill"
                    }
                  >
                    {skill}
                  </Badge>
                ))}
              </>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
