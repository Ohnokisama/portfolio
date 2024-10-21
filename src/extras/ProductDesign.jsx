import React from 'react'
import Pic from "./../assets/2.jpg";
import SkillCard from './SkillCard';

const ProductDesign = () => {
  return (
    <SkillCard 
      image={Pic}
      heading={'UI/UX Design'}
      description={'As a UI/UX designer, my work is rooted in empathy, collaboration, attention to detail, and a commitment to continuous learning. I’m driven by the passion to create designs that not only address user needs but also leave a lasting impact by inspiring and engaging them.'}
    />
  )
}

export default ProductDesign