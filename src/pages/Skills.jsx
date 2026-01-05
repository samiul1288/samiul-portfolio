import { useEffect, useRef } from "react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import SkillBar from "../components/common/SkillBar.jsx";
import { skills } from "../data/skills.js";
import { revealOnScroll } from "../animations/scrollReveal.js";

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnScroll(ref.current);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="Skills"
        subtitle="Graphical view (progress) and grouped by category."
      />

      <div ref={ref} className="grid lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, list]) => (
          <GlassCard key={category} className="p-6">
            <h3 className="text-lg font-extrabold">{category}</h3>
            <div className="mt-4 space-y-3">
              {list.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
