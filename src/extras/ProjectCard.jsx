import React from 'react'

const ProjectCard = ({project: {image, title, category, projectLink}}) => {
  return (
    <div className='h-[200px] md:h-[350px] bg-red-500 relative overflow-hidden group'>
      <img src={image} alt={title} className='h-full w-full object-cover' />
      <div className="absolute w-full h-full bg-main/75 top-0 left-[100%] flex items-center justify-center flex-col group-hover:left-0 transition-all">
        <p className='text-xl md:text-3xl font-bold text-center'>{title}</p>
        <p className='text-md font-bold text-center'>{category}</p>
        <a href={`${projectLink}`} className='mt-2' target='_blank'>
          View Project &nbsp;
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard