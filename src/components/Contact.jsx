import { div } from 'framer-motion/client'
import React from 'react'

const Contact = () => {
  const date = new Date().getFullYear()
  return (
    <div className='pt-20 pb-12 px-6 md:px-24 bg-bgDark' id='contact'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <ul className="flex gap-2">
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="https://github.com/Ohnokisama" className='group-hover:text-mainDark transition-all'>
              <i className="ri-github-line"></i>
            </a>
          </li>
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="https://linkedin.com/in/jephthah-onuoha" className='group-hover:text-mainDark transition-all'>
              <i className="ri-linkedin-line"></i>
            </a>
          </li>
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="https://wa.me/+2349011431658" className='group-hover:text-mainDark transition-all'>
              <i className="ri-whatsapp-line"></i>
            </a>
          </li>
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="https://instagram.com/itz_ohnokisama" className='group-hover:text-mainDark transition-all'>
              <i className="ri-instagram-line"></i>
            </a>
          </li>
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="mailto:ohnokidesigns@gmail.com" className='group-hover:text-mainDark transition-all'>
              <i className="ri-mail-line"></i>
            </a>
          </li>
          <li className="p-2 w-[50px] h-[50px] bg-bgLessDark flex justify-center items-center rounded-full group hover:bg-mainLight transition-all">
            <a href="https://behance.net/jephthahonuoha1" className='group-hover:text-mainDark transition-all'>
              <i className="ri-behance-line"></i>
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-16 text-center">
        Copyright &copy; {date} Onuohajephthah.netlify.app
      </p>
    </div>
  )
}

export default Contact