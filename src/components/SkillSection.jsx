import { div } from 'framer-motion/client'
import React from 'react'
import WebDev from '../extras/WebDev'
import ProductDesign from '../extras/ProductDesign'
import BrandIdentity from '../extras/BrandIdentity'

const SkillSection = ({ tab }) => {
  switch(tab) {
    case 'Web Development':
      return (
        <WebDev />
      )

    case 'UI/UX Design':
      return (
        <ProductDesign />
      )

    // case 'Brand Identity':
    //   return (
    //     <BrandIdentity />
    //   )
  }
}

export default SkillSection