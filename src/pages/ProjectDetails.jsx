import { useParams, Link } from "react-router-dom";
import SectionTitle from "../components/common/SectionTitle.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import { projects } from "../data/projects.js";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-extrabold">Project not found</h1>
        <Link to="/projects" className="underline text-slate-300">
          Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <Link to="/projects" className="text-sm underline text-slate-300">
        ← Back to Projects
      </Link>

      <div className="mt-6">
        <SectionTitle title={project.name} subtitle={project.description} />

        <div className="grid lg:grid-cols-2 gap-6">
          <GlassCard className="overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-72 object-cover"
            />
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-extrabold">Main Technology Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* ✅ Live link থাকলে show */}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-extrabold hover:opacity-90 transition"
                >
                  Live Project
                </a>
              ) : (
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200">
                  {project.liveStatusText ||
                    "Working (Live link not available yet)"}
                </span>
              )}

              {/* ✅ GitHub always show */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10 transition"
              >
                GitHub Repo (Client)
              </a>
            </div>
          </GlassCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <GlassCard className="p-6">
            <h3 className="font-extrabold">Challenges Faced</h3>
            <ul className="mt-3 space-y-2 text-slate-300 list-disc pl-5">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-extrabold">Improvements & Future Plans</h3>
            <ul className="mt-3 space-y-2 text-slate-300 list-disc pl-5">
              {project.improvements.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
