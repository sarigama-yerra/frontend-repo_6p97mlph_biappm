import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Global neon glow background */}
      <div className="fixed inset-0 bg-[radial-gradient(1200px_500px_at_20%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(1000px_400px_at_80%_0%,rgba(99,102,241,0.10),transparent)]" />
      <Navbar />
      <main className="relative pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
