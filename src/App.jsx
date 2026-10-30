import { Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/profile.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetails from './components/ProjectDetails.jsx'
import { getProjectSlug, projects } from './data/content.js'

export default function App() {
  const projectSlug = new URLSearchParams(window.location.search).get('project')
  const project = projects.find((item) => getProjectSlug(item.name) === projectSlug)

  if (project) {
    return <ProjectDetails project={project} />
  }

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
