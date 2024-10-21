import React from 'react'
import { motion } from "framer-motion";

const SkillCard = ({image, heading, description}) => {
  return (
    <div className='pb-24 flex flex-col md:flex-row h-auto md:h-[500px] items-center overflow-x-scroll scrollbar-hide'>
      <div className="h-full w-full md:w-[50%]">
        <motion.img 
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ 
            duration: .3,
            ease: 'linear'
          }}
          src={image} 
          alt={heading} 
          className="w-full h-full object-cover" 
        />
      </div>
      <motion.div 
        initial={{ x: 250 }}
        animate={{ x: 0 }}
        transition={{ 
          duration: .3,
          ease: 'linear'
        }}
        className="w-full md:w-[50%] p-6 md:p-16"
      >
        <h3 className='text-3xl font-bold mb-4'>{heading}</h3>
        <p>{description}</p>
      </motion.div>
    </div>
  )
}

export default SkillCard