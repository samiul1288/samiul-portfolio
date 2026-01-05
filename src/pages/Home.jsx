import { motion } from "framer-motion";
import Button from "../components/common/Button.jsx";
import SocialLinks from "../components/common/SocialLinks.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import { profile } from "../data/profile.js";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-slate-300 font-medium"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 text-slate-300 text-lg"
          >
            <span className="font-bold text-white">{profile.designation}</span>{" "}
            — I build modern, responsive, user-friendly web interfaces with
            smooth animations.
          </motion.p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              as="a"
              href="/resume.pdf"
              download
              className="bg-white text-slate-950 hover:opacity-90"
            >
              View / Download Resume
            </Button>

            <Button
              as="a"
              href="/projects"
              className="border border-white/10 bg-white/5 hover:bg-white/10"
            >
              View Projects
            </Button>
          </div>

          <div className="mt-7">
            <SocialLinks />
          </div>

          <div className="mt-8">
            <GlassCard className="p-5">
              <p className="font-bold">Quick info</p>
              <p className="mt-2 text-slate-300 text-sm">
                {profile.education} • {profile.location}
              </p>
              <p className="mt-1 text-slate-400 text-sm">
                Email: {profile.email} • Phone: {profile.phone}
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3"
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white text-slate-950 px-4 py-2 text-sm font-extrabold shadow">
              Open to opportunities
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
