import { useEffect, useRef } from "react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import { profile } from "../data/profile.js";
import { revealOnScroll } from "../animations/scrollReveal.js";

export default function About() {
  const a = useRef(null);
  const b = useRef(null);

  useEffect(() => {
    if (a.current) revealOnScroll(a.current);
    if (b.current) revealOnScroll(b.current, { y: 30 });
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="About Me"
        subtitle="My journey, what I enjoy building, and a bit of personality."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard ref={a} className="p-6">
          <p className="text-slate-300 leading-relaxed">
            I’m <span className="font-bold text-white">{profile.name}</span>,
            currently studying{" "}
            <span className="font-semibold text-white">
              {profile.education}
            </span>
            . I started learning web development by building small UI projects
            and gradually improving my skills in responsive design, component
            structure, and clean user experience.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m especially interested in{" "}
            <span className="font-semibold text-white">
              Full Stack Web Development
            </span>
            . I enjoy creating modern frontend interfaces and I’m also working
            on backend fundamentals so I can build complete end-to-end
            applications in the future.
          </p>

          <p className="mt-4 text-slate-300 leading-relaxed">
            Outside programming, I love{" "}
            <span className="font-semibold text-white">travelling</span> and
            trying different types of food in different places. I’m also
            fascinated by how every country has its own unique traditions and
            culture. In my free time, I enjoy playing games like{" "}
            <span className="font-semibold text-white">Free Fire</span>.
          </p>
        </GlassCard>

        <GlassCard ref={b} className="p-6">
          <h3 className="text-lg font-extrabold">Highlights</h3>
          <ul className="mt-4 space-y-2 text-slate-300 list-disc pl-5">
            <li>Focus: Responsive UI, clean layouts, and smooth animations</li>
            <li>
              Interest: Full Stack development (Frontend + Backend growth)
            </li>
            <li>
              Strength: Consistency, fast learning, and attention to UI details
            </li>
            <li>Mindset: Build practical projects and improve step by step</li>
          </ul>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-slate-300">
              I’m open to internships / junior roles where I can grow as a
              developer and work on real-world products.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
