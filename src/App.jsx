import { Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/profile.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ height: '100vh', background: '#0a0d12' }} />}>
        <Hero />
      </Suspense>
      <Profile />
      <Contact />
      <Footer />
    </>
  )
}

