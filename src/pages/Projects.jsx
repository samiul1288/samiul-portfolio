import SectionTitle from "../components/common/SectionTitle.jsx";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/common/ProjectCard.jsx";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="Projects"
        subtitle="At least 3 projects in card format — click details for full breakdown."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
