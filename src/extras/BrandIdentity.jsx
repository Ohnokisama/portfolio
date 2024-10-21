import React from 'react'
import Pic from "./../assets/3.jpg";
import SkillCard from './SkillCard';

const BrandIdentity = () => {
  return (
    <SkillCard 
      image={Pic}
      heading={'Brand Identity'}
      description={'As a brand identity designer, my work ethic revolves around creativity, consistency, and a deep understanding of the brands I work with. Collaboration is key to my process—I work closely with clients to ensure that every element, from logos to color palettes, reflects their unique story. I approach each project with meticulous attention to detail, ensuring designs are not only visually striking but also functional, timeless, and adaptable across various platforms.'}
    />
  )
}

export default BrandIdentity