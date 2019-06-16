import React from 'react'

const FilterOptions = ({ projects }) => {
  const reducedTags = projects
    .map(project => {
      return project.node.frontmatter.tags
    })
    .reduce((a, b) => a.concat(b), [])

  const uniqueTags = Array.from(new Set(reducedTags))

  return uniqueTags.map(tag => (
    <option key={tag} value={tag}>
      &nbsp;
      {tag}
      &nbsp;
    </option>
  ))
}

export default FilterOptions
