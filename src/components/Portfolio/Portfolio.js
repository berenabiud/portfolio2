import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex flex-col items-center justify-center px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-[0.2em] mb-8">
          MY PORTFOLIO
        </h1>
        <p className="text-yellow-400 text-lg md:text-xl tracking-widest font-medium">
          MY LATEST WORK
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  // Decide which link to use (internal or external)
  const linkToUse = project.externalLink || project.link;
  const isExternal = !!project.externalLink;

  return (
    <div className="group cursor-pointer">
      {isExternal ? (
        <a href={linkToUse} target="_blank" rel="noopener noreferrer">
          <ProjectContent project={project} />
        </a>
      ) : (
        <Link href={linkToUse}>
          <ProjectContent project={project} />
        </Link>
      )}
      <h3 className="text-white text-xl font-bold tracking-wider mt-6 text-center">
        {project.title}
      </h3>
      <p className="text-gray-300 text-center mt-2">{project.description}</p>
      {project.tags && (
        <div className="flex justify-center gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-slate-600 text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectContent({ project }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl transform transition-all duration-300 group-hover:scale-105">
      <Image
        src={project.imageUrl}
        alt={project.description}
        width={350}
        height={400}
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {/* Optional: Add hover overlay with more info */}
      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm">{project.description}</p>
      </div>
    </div>
  );
}