import { profile } from "../../data/profile.js";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div>
          <p className="font-extrabold">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.education}</p>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} — React • Tailwind • Lenis • GSAP •
          Motion
        </p>
      </div>
    </footer>
  );
}
