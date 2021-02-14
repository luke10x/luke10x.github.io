import React from "react"
import PropTypes from "prop-types"

function Project({ icon, title, description, tags, links }) {

  return (
    <div>
      <div class="title">{icon} {title}</div>
      <div class="description">
        <div dangerouslySetInnerHTML={{ __html: description }}/>
        <ul class="tags">
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
        <div class="links">
          {links.map(link => (
            <a href={link.url} target="_blank">
            {link.title}
            </a>
          ))}
        </div>
      </div>
    </div >
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Project