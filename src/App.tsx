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
      <div className="portrait-lock" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M19.5 10.5c0 7.2-5.7 13-12.7 13S4.5 17.7 4.5 10.5c0-5.5 3.5-10.2 8.5-11.6.7-.2 1.5-.2 2.2 0C16.5.3 20 5 20 10.5z"/>
          <path d="M12 7v5l3 3"/>
        </svg>
        <p>Please rotate to portrait</p>
      </div>
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
