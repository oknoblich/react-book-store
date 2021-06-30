import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from 'Redux/directory.selectors'
import { DirectoryItem } from 'Components'

import './DirectoryMenu.css'

const DirectoryMenu = ({ directorySections }) => (
  <div className="directory-menu">
    {
      directorySections.map(({ id, ...otherProps }) => (
        <DirectoryItem key={id} {...otherProps} />
      ))
    }
  </div>
)

const mapState = createStructuredSelector({
  directorySections: selectDirectorySections
})

export default connect(mapState)(DirectoryMenu)
