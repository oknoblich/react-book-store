import React from 'react'
import { connect } from 'react-redux'

import { selectCollectionSection } from 'Redux/collection.selectors'
import { CollectionItem } from 'Components'

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-preview">
    <h2>{title} Books</h2>
    <div className="preview">
      {
        items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

const mapState = (state, ownProps) => ({
  collection: selectCollectionSection(ownProps.match.params.collectionName)(state)
})

export default connect(mapState)(CollectionPage)
