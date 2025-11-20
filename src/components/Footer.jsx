export default function Footer(){
  return (
    <footer className="relative mt-20 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
          <p className="text-blue-200/80 text-sm">© {new Date().getFullYear()} Devansh Paliwal. All rights reserved.</p>
          <div className="flex items-center gap-3 text-blue-200/80 text-sm">
            <a href="#home" className="hover:text-white">Top</a>
            <span className="opacity-30">•</span>
            <a href="#projects" className="hover:text-white">Projects</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
