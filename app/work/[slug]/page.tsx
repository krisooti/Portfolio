import type { Metadata } from "next";
import { getProject, projects } from "../../projects";
import { getCaseStudyContent } from "./caseStudies";
import { ProjectNotFound } from "./layouts/CaseStudyParts";
import { HavenCaseStudy } from "./layouts/HavenCaseStudy";
import { LeafyCaseStudy } from "./layouts/LeafyCaseStudy";
import { MindBridgeCaseStudy } from "./layouts/MindBridgeCaseStudy";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.title} - Kristi Kim` : "Case Study - Kristi Kim",
    description: project?.overview,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return <ProjectNotFound />;
  }

  const content = getCaseStudyContent(project);

  if (project.slug === "Haven") {
    return <HavenCaseStudy project={project} content={content} />;
  }

  if (project.slug === "Leafy") {
    return <LeafyCaseStudy project={project} content={content} />;
  }

  return <MindBridgeCaseStudy project={project} content={content} />;
}
