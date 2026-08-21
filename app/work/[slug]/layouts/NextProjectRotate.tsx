"use client";

import Link from "next/link";

import type { Project } from "../../../projects";

function projectName(project: Project) {
  return project.slug === "tmind-ai" ? "Tmind AI" : project.title;
}

function ProjectFace({ project }: { project: Project }) {
  return (
    <>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[#f3f1ef]">
        {project.slug === "tmind-ai" ? (
          <div className="tmind-thumbnail absolute inset-0">
            <div className="tmind-gradient" aria-hidden="true" />
            <h3 className="tmind-title text-[18px]">Tmind AI</h3>
          </div>
        ) : project.cardImage ? (
          <img
            className="absolute inset-0 h-full w-full object-contain p-4"
            src={project.cardImage.src}
            alt=""
          />
        ) : null}
      </div>
      <p className="mb-0 mt-3 font-serif text-[20px] font-normal leading-none tracking-[-0.02em] text-[#3f3c3a]">
        {projectName(project)}
      </p>
      <p className="mb-0 mt-1.5 text-[11px] font-normal uppercase tracking-[0.08em] text-[#9a928e]">
        {project.category}
      </p>
    </>
  );
}

export function NextProjectRotate({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-5 grid w-full grid-cols-2 gap-6 max-[560px]:grid-cols-1">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="min-w-0"
          aria-label={`Open ${project.title} case study`}
        >
          <ProjectFace project={project} />
        </Link>
      ))}
    </div>
  );
}
