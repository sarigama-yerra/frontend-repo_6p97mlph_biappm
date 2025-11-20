import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-blue-500/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_60px_rgba(56,189,248,0.15)]">
          <div className="flex items-center justify-between h-16 px-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 opacity-70 group-hover:opacity-90 transition" />
                <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-slate-800/80 border border-white/10">
                  <Sparkles className="w-5 h-5 text-cyan-300" />
                </div>
              </div>
              <span className="font-semibold tracking-tight text-white text-lg">
                Devansh <span className="text-cyan-300">Paliwal</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-xl text-sm text-blue-100/80 hover:text-white hover:bg-white/5 transition border border-transparent hover:border-white/10"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-blue-100"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 animate-in">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-xl text-sm text-blue-100/80 hover:text-white hover:bg-white/5 transition border border-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
