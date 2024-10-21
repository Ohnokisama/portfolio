import React, { useEffect } from 'react'
import { Hero, About, Skills, Projects, Testimonials, Contact } from './../components'

const Home = () => {
  useEffect(() => {
    document.title = "Onuoha Jephthah | Web Developer | UI/UX Designer"
  }, [])
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home