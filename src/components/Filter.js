import React from 'react'

const Filter = ({ projects, setVisibleProjects }) => {
  const handleChange = e => {
    const selection = e.target.value
    if (selection === 'all') {
      setVisibleProjects(projects)
    } else {
      const filteredProjects = projects.filter(project => {
        return project.node.frontmatter.tags.includes(selection)
      })
      setVisibleProjects(filteredProjects)
    }
  }

  return (
    <>
      <div className="filter">
        <form className="filter">
          <span className="filter__text text-content">
            Filter projects by language, framework or library:
          </span>
          <select className="filter__select" onChange={handleChange}>
            <option value="all">&nbsp;All&nbsp;</option>
            <option value="Python">&nbsp;Python</option>
            <option value="JavaScript">&nbsp;JavaScript&nbsp;</option>
            <option value="React">&nbsp;React&nbsp;</option>
          </select>
        </form>
      </div>
    </>
  )
}

export default Filter
