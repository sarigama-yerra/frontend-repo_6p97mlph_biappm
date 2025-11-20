import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      {/* Neon gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(139,92,246,0.25),transparent)]" />

      {/* 3D Spline scene */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glass card content */}
      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(56,189,248,0.12)]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-cyan-300 text-sm tracking-widest uppercase">Futuristic Developer Portfolio</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Devansh Paliwal
              </h1>
              <p className="mt-3 text-blue-200/80 max-w-2xl">
                Building immersive web experiences with modern 3D, motion design, and scalable full‑stack engineering.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
              <a href="#projects" className="group px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.55)] transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-blue-100 hover:bg-white/10 transition">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
