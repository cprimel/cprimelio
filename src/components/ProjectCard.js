import React from 'react'
import { Link } from 'gatsby'
import CardImage from './CardImage'

const ProjectCard = ({ project }) => {
  const { title, tags, description, imgName, path } = project.node.frontmatter
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <CardImage imgName={imgName} />
        <div className="card__placard">
          <h4 className="card__title">{title}</h4>
        </div>
      </div>

      <Link to={path} state={{ fromHome: false }}>
        <div className="card__side card__side--back">
          <h3 className="card__description heading-tertiary">{description}</h3>
          <div className="card__tags-container">
            {tags.map(tag => (
              <p className="card__tags">{tag}</p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
