import React from 'react'
import CardImage from './CardImage'

const ProjectCard = ({ title, tags, description, imgName }) => {
  
  return (
    <div className="card">
      <div className="card__side card__side--front">
      <CardImage imgName={imgName}/>
        <div className="card__placard">
          <h4 className="card__title">{title}</h4>
        </div>
      </div>
      <div className="card__side card__side--back">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
