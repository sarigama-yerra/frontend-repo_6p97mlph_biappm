import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(500px_250px_at_90%_10%,rgba(139,92,246,0.12),transparent)]" />
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(59,130,246,0.12)]"
        >
          <p className="text-cyan-300 text-sm tracking-widest uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Crafting premium digital experiences</h2>
          <p className="mt-4 text-blue-200/80 max-w-3xl">
            I'm a full‑stack engineer focused on building performant, accessible and visually arresting web apps. I blend
            modern 3D, motion, and solid engineering practices to ship products that feel premium and delightful.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { k: "+5", l: "Years Experience" },
              { k: "20+", l: "Projects Delivered" },
              { k: "100%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-3xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">{s.k}</div>
                <div className="mt-1 text-blue-200/80">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
