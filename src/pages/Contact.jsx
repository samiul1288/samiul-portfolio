import SectionTitle from "../components/common/SectionTitle.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import Button from "../components/common/Button.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const whatsappLink = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <SectionTitle
        title="Contact"
        subtitle="Reach me directly via email/phone (WhatsApp optional)."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-extrabold">Direct Contact</h3>

          <p className="mt-4 text-slate-300">
            <span className="font-bold text-white">Email:</span>{" "}
            <a className="underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>

          <p className="mt-2 text-slate-300">
            <span className="font-bold text-white">Phone:</span> {profile.phone}
          </p>

          <p className="mt-2 text-slate-300">
            <span className="font-bold text-white">WhatsApp:</span>{" "}
            <a
              className="underline"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              as="a"
              href={`mailto:${profile.email}`}
              className="bg-white text-slate-950 hover:opacity-90"
            >
              Email Me
            </Button>
            <Button
              as="a"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 bg-white/5 hover:bg-white/10"
            >
              WhatsApp
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-extrabold">Send a Message</h3>
          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Message sent (demo). Later connect EmailJS / backend API."
              );
            }}
          >
            <input
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your name"
              required
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your email"
              type="email"
              required
            />
            <textarea
              className="w-full min-h-[130px] rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Your message"
              required
            />
            <button className="w-full rounded-xl bg-white text-slate-950 py-3 font-extrabold hover:opacity-90 transition">
              Send
            </button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
