export default function SkillBar({ name, level }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-slate-300">{level}%</p>
      </div>
      <div className="mt-3 h-2 w-full rounded bg-white/10 overflow-hidden">
        <div className="h-2 rounded bg-white" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
