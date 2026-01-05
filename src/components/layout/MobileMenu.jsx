import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose, nav }) {
  if (!open) return null;

  const linkClass = ({ isActive }) =>
    "px-4 py-3 rounded-xl text-sm font-semibold transition " +
    (isActive ? "bg-white text-slate-950" : "text-slate-200 hover:bg-white/10");

  return (
    <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
        {nav.map((n) => (
          <NavLink key={n.to} to={n.to} className={linkClass} onClick={onClose}>
            {n.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
