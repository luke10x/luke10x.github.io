import React from "react"
import PropTypes from "prop-types"

function Project({ title, description, tags }) {

  return (
    <div>
      <div class="title">☑️ {title}</div>
      <div class="description">
        {description}
        <ul class="tags">
          {tags.map(tag => <li>{tag}</li>)}
        </ul>
        <div class="links">
          <a class="taxx" href="http://taxx-spa.herokuapp.com/" target="_blank">
            TAXX demo
          </a>
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