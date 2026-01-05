export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        {title}
      </h1>
      {subtitle && <p className="mt-2 text-slate-300 max-w-2xl">{subtitle}</p>}
      <div className="mt-4 h-[2px] w-16 bg-white/60 rounded" />
    </div>
  );
}
