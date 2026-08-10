import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import References from './components/References'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Highlights />
        <Experience />
        <Skills />
        <Education />
        <References />
      </main>
      <Footer />
    </div>
  )
}

export default App
