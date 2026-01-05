import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <img
        src={project.image}
        alt={project.name}
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-extrabold">{project.name}</h3>
        <p className="mt-2 text-sm text-slate-300 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-xs rounded-full bg-white/10 px-2 py-1 text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-4 py-2 text-sm font-bold hover:opacity-90 transition"
          >
            View More / Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
