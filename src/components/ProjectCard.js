import React from 'react'

const ProjectCard = ({ title, tags, description }) => {
  return (
    <div className="project-card">
      <div className="project-card__front project-card__front--1">
        <div className="project-card__placard">
          <h4 className="project-card__title">{ title }</h4>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectCard