import React from 'react'
import { motion } from "framer-motion";
import Resume from "./../assets/Jephthah's Resume.pdf";

const Hero = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center' id='home'>
      <span className="text-xl md:text-4xl">
        Hi there &#128075;!!
      </span>
      <h1 className='text-3xl md:text-6xl font-bold my-2'>
        I'm Onuoha Jephthah
      </h1>
      <h3 className="text-xl md:text-3xl flex items-center md:my-3">
        I'm a &nbsp;
        <div className='h-[40px] overflow-hidden px-1'>
          <motion.p 
            className='leading-[40px] text-main font-semibold'
            animate={{ marginTop: [0, -40, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear'
             }}
          >
              Frontend Web Developer
          </motion.p>
          <p className='leading-[40px] text-main font-semibold'>UI/UX Designer</p>
          {/* <p className='leading-[40px] text-main font-semibold'>Brand Identity Designer</p> */}
        </div>
      </h3>
      <div className="flex gap-2 my-3">
        <a href="#about" className="py-2 px-4 md:py-3 md:px-6 bg-main rounded hover:bg-mainDark transition-all">
          About Me
        </a>
        <a href={Resume} download={Resume} className="py-2 px-4 md:py-3 md:px-6 bg-white text-main hover:bg-main hover:text-white transition-all font-semibold rounded">
          Download CV &nbsp;
          <i className="ri-download-line"></i>
        </a>
      </div>
    </div>
  )
}

export default Hero