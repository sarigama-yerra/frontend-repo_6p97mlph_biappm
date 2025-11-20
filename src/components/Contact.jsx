import { motion } from 'framer-motion';

export default function Contact(){
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_80%_20%,rgba(56,189,248,0.10),transparent)]" />
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_80px_rgba(56,189,248,0.12)]"
        >
          <p className="text-cyan-300 text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something premium</h2>
          <p className="mt-3 text-blue-200/80">Ready to collaborate? Drop a message and I’ll get back within 24 hours.</p>

          <form className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" type="email" placeholder="Email" />
            </div>
            <textarea rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Project details" />
            <button className="justify-self-start px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.55)] transition">Send Message</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
