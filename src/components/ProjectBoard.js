import React, { useState } from 'react'
import Filter from './Filter'
import ProjectCard from './ProjectCard'

const ProjectBoard = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(projects)
  return (
    <>
      <div className="project-board__container">
        <Filter projects={projects} setVisibleProjects={setVisibleProjects} />
        <div className="project-board__body">
          {visibleProjects.map((project, active, toggle) => (
            <ProjectCard
              key={project.node.frontmatter.id}
              project={project}
              active={active}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectBoard
