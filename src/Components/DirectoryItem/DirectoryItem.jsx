import React from 'react'
import { withRouter } from 'react-router-dom'

import './DirectoryItem.css'

const DirectoryItem = ({ title, imageUrl, linkUrl, match, history }) => (
  <div
    className="directory-item"
    style={{ backgroundImage: `url(${imageUrl})` }}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className="title">
      {title.toUpperCase()}
    </div>
  </div>
)

export default withRouter(DirectoryItem)
