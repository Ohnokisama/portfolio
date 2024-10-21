import React from 'react'
import Pic from "./../assets/1.jpg";
import SkillCard from './SkillCard';

const WebDev = () => {
  return (
    <SkillCard 
      image={Pic}
      heading={'Web Development'}
      description={'My work ethic as a web developer is driven by a passion for quality, continuous improvement, and ethical responsibility. I aim to build solutions that not only meet client goals but also enrich the user experience and contribute to the broader digital landscape.'}
    />
  )
}

export default WebDev