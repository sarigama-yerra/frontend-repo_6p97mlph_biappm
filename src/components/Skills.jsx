import { Code2, Cpu, Layout, Server, Sparkles, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'Node/Express', 'MongoDB', 'PostgreSQL', 'REST/GraphQL'] },
  { icon: Cpu, title: '3D & Motion', items: ['Spline', 'Three.js', 'GSAP', 'Rive', 'Lottie'] },
  { icon: Layout, title: 'Design', items: ['Figma', 'Shadcn', 'Design Systems', 'Accessibility'] },
  { icon: Boxes, title: 'Cloud', items: ['Vercel', 'AWS', 'CI/CD', 'Docker'] },
  { icon: Sparkles, title: 'Extras', items: ['Testing', 'Analytics', 'Perf Audits'] },
];

export default function Skills(){
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_90%,rgba(56,189,248,0.08),transparent)]" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <p className="text-cyan-300 text-sm tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Core competencies</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl group"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition" />
              <s.icon className="w-6 h-6 text-cyan-300" />
              <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{s.items.join(' · ')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
