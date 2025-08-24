import React from 'react'
import projects from './../extras/projects'
import ProjectCard from '../extras/ProjectCard'

const Projects = () => {
  return (
    <div className='py-24 px-6 md:px-24' id='projects'>
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Projects</h3>
        <p className='text-md md:text-xl my-2'>Here are some of my projects</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {
          projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))
        }
      </div>

    </div>
  )
}

export default Projects