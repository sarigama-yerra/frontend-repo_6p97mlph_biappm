import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'A premium ecommerce UI with real‑time search, 3D previews, and micro‑animations.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'AI Studio',
    desc: 'Generative AI playground featuring prompt chaining and visual outputs.',
    tags: ['FastAPI', 'React', 'MongoDB'],
    link: '#'
  },
  {
    title: '3D Showcase',
    desc: 'Immersive product gallery with Spline & Three.js interactions.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#'
  },
];

export default function Projects(){
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_20%_80%,rgba(139,92,246,0.10),transparent)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-cyan-300 text-sm tracking-widest uppercase">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl hover:bg-slate-900/70"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl group-hover:bg-violet-500/20 transition" />
              <div className="text-xl font-semibold text-white drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]">{p.title}</div>
              <p className="mt-2 text-blue-200/80 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-blue-200/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
