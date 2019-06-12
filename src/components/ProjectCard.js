import React from 'react'
import { Link } from 'gatsby'
import { Spring, animated } from 'react-spring/renderprops'
import CardImage from './CardImage'

const ProjectCard = ({ project }) => {
  const { title, tags, description, imgName, path } = project.node.frontmatter
  return (
    <Spring
      items={{ duration: 3000 }}
      from={{ transform: 'scale(0.2)' }}
      to={{ transform: 'scale(1)' }}
    >
      {props => (
        <animated.div style={props} className="card__container">
          <div className="card">
            <div className="card__side card__side--front">
              <CardImage imgName={imgName} />
              <div className="card__placard">
                <h4 className="card__title">{title}</h4>
              </div>
            </div>

            <Link to={path} state={{ fromHome: false }}>
              <div className="card__side card__side--back">
                <h3 className="card__description heading-tertiary">
                  {description}
                </h3>
                <p className="card__more-details">(Click for more details)</p>
                <div className="card__tags-container">
                  {tags.map(tag => (
                    <p key={tag} className="card__tags">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </animated.div>
      )}
    </Spring>
  )
}

export default ProjectCard
