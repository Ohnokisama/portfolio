import React, { useState } from 'react'
import { motion, AnimatePresence, animate } from "framer-motion";
import Logo from "./../assets/Logo_main.svg";
import navLinks from "./NavLinks";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  const list = {
    hidden: { x: "-100vw" }, // Slide from left off-screen
    visible: {
      x: 0, // Bring it back to original position
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        when: "beforeChildren", // Animate ul first, then children
        staggerChildren: 0.3,   // Stagger the child animations (li)
      },
    },
    exit: {
      x: "-100vw", // Slide back off-screen when exiting
      transition: { ease: "easeInOut" },
    },
  };
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 }
  };

  return (
    <>
      <nav className='py-4 px-6 md:px-24 flex justify-between items-center fixed w-full bg-bgDarker/75 backdrop-blur-md z-50'>
        <img src={Logo} alt="" className='w-[40px] md:w-[60px]' />
        <div className="flex items-center gap-6">
          <AnimatePresence>
            {
              !isVisible ? (
                <motion.i
                  whileTap={{ rotate: '360deg' }}
                  // whileHover={{ rotate: '180deg' }}
                  transition={{ ease: "easeOut", duration: .8 }}
                  className='ri-menu-3-line text-xl'
                  onClick={() => setIsVisible(!isVisible)}
                >

                </motion.i>
              ) : (
                <motion.i
                  whileTap={{ rotate: '360deg' }}
                  // whileHover={{ rotate: '180deg' }}
                  transition={{ ease: "easeOut", duration: .8 }}
                  className='ri-close-line text-xl'
                  onClick={() => setIsVisible(!isVisible)}
                >

                </motion.i>
              )
            }
          </AnimatePresence>
          <a href='tel:+2349011431658' className='py-3 px-6 rounded bg-main'>
            <i className="ri-phone-line"></i> Contact
          </a>
        </div>
      </nav>
      <AnimatePresence>
        {isVisible && (
          <motion.ul
            className="fixed top-0 left-0 h-full w-[90%] md:w-[40%] bg-bgDark pt-28 z-40"
            variants={list}   // Apply ul animation variants
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((link, id) => (
                <motion.li
                  key={id}
                  className="py-6 px-12 border-b border-bgLessDark"
                  variants={item}  // Animate li items individually
                >
                  <a href={link.address} className="text-white flex justify-between">
                    {link.pageName}
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </motion.li>
              )
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
    
  )
}

export default Navbar