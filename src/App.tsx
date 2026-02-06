import { useRef, useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ReviewProvider } from './context/ReviewContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PersonalInjury from './pages/PersonalInjury'
import MedicalNegligence from './pages/MedicalNegligence'
import FamilyLaw from './pages/FamilyLaw'
import PropertyLaw from './pages/PropertyLaw'
import WillsProbate from './pages/WillsProbate'
import DisputeResolution from './pages/DisputeResolution'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Parallax Blobs
    gsap.to('.parallax-blob-1', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })
    gsap.to('.parallax-blob-2', {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    })
  }, { scope: container })

  return (
    <ReviewProvider>
      <HashRouter>
        <ScrollToTop />
        <div ref={container} className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-amber-400/30 overflow-x-hidden">
          {/* Dynamic Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="parallax-blob-1 absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[140px]" />
            <div className="parallax-blob-2 absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-indigo-950/30 rounded-full blur-[140px]" />
          </div>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-injury" element={<PersonalInjury />} />
            <Route path="/medical-negligence" element={<MedicalNegligence />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/property-law" element={<PropertyLaw />} />
            <Route path="/wills-probate" element={<WillsProbate />} />
            <Route path="/dispute-resolution" element={<DisputeResolution />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </ReviewProvider>
  )
}

export default App
