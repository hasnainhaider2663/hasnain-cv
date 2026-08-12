import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import References from './components/References'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Highlights />
        <Experience />
        <Skills />
        <References />
      </main>
      <Education />
      <Footer />
    </div>
  )
}

export default App
