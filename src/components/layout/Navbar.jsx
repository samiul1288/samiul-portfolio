import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu.jsx";
import { profile } from "../../data/profile.js";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    "px-3 py-2 rounded-xl text-sm font-semibold transition " +
    (isActive ? "bg-white text-slate-950" : "text-slate-200 hover:bg-white/10");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-950 font-black">
            SR
          </span>
          <div className="leading-tight">
            <p className="font-extrabold">{profile.name}</p>
            <p className="text-xs text-slate-400">{profile.designation}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} nav={nav} />
    </header>
  );
}
