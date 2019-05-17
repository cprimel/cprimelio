import React from 'react'
import Filter from './Filter'
import ProjectCard from './ProjectCard'


const project = {
  title: 'SFO Traffic Analysis',
  tags: [
    'python',
    'pandas',
    'keras'
  ],
  description: 'An analysis of LAX traffic using pandas and keras',
  imgName: 'project1-sample.jpg'
}

const ProjectBoard = () => {
  return (
    <>
    <Filter />
    <div className="project-board__container">
      <div className="project-board__body">
        <ProjectCard { ...project } />
      </div>
    </div>
    </>
  )
}

export default ProjectBoard
