import React from 'react'
import Filter from './Filter'
import ProjectCard from './ProjectCard'

const ProjectBoard = ({ projects }) => {
  return (
    <>
      <Filter />
      <div className="project-board__container">
        <div className="project-board__body">
          {projects.map(project => (
            <div className="card__container">
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectBoard
