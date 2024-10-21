import React from 'react'
import Logo from './../assets/Logo_main.svg'

const About = () => {
  return (
    <div id='about' className='py-24 px-6 md:px-24 text-center'>
      <div className='w-full'>
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
        <p className='my-3'>
          Hi! I'm Onuoha Jephthah, a passionate Web Developer and UI/UX Designer with a knack for creating intuitive, user-centered digital experiences. With a strong foundation in front-end development and a keen eye for design, I blend creativity and technical expertise to craft websites and applications that not only look great but also function seamlessly. <br /><br />

          I specialize in building responsive, accessible, and performance-optimized websites using modern web technologies like HTML, CSS, JavaScript, React, and more. As a UI/UX designer, I focus on understanding user behavior to create designs that solve real problems and enhance the overall user journey. <br /><br />

          When I'm not coding or designing, you can find me exploring the latest design trends, experimenting with new web frameworks, or working on side projects to sharpen my skills. <br /><br />

          Let’s build something amazing together!
        </p>
      </div>
      {/* <div className='w-full md:w-[50%]'>
        <img src={Logo} className='w-full' alt="" />
      </div> */}
    </div>
  )
}

export default About