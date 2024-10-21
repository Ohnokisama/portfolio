import React, { useState } from 'react'
import SkillSection from './SkillSection'

const Skills = () => {
  const [tab, setTab] = useState('Web Development')
  const active = "text-main bg-mainLight/10 border-2 border-main rounded-xl"
  return (
    <>
      <div className='pt-24 pb-8 px-6 md:px-24' id='doings'>
        <h3 className="text-3xl md:text-4xl font-bold text-center">What I Do</h3>
        <div className="flex py-8 px-4 md:px-[240px] justify-between gap-4 overflow-x-scroll scrollbar-hide">
          <button 
            className={`${tab === 'Web Development' ? active : ''} py-3 px-6 whitespace-nowrap w-auto md:w-1/2`}
            onClick={() => setTab('Web Development')}
          >
            Web Development
          </button>
          <button 
            className={`${tab === 'UI/UX Design' ? active : ''} py-3 px-6 whitespace-nowrap w-auto md:w-1/2`}
            onClick={() => setTab('UI/UX Design')}
          >
            UI/UX Design
          </button>
          {/* <button 
            className={`${tab === 'Brand Identity' ? active : ''} py-3 px-6 whitespace-nowrap w-auto md:w-1/3`}
            onClick={() => setTab('Brand Identity')}
          >
            Brand Identity
          </button> */}
        </div>
      </div>
      <SkillSection tab={tab} />
    </>
  )
}

export default Skills