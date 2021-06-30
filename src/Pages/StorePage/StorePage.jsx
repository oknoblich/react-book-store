import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from 'Redux/collection.actions'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from 'Redux/collection.selectors'
import { CollectionPage } from 'Pages'
import { CollectionOverview } from 'Components'

const StorePage = ({ match, isCollectionFetching, isCollectionLoaded, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [])

  if (isCollectionFetching || !isCollectionLoaded) {
    return (
      <div className="mt-6 pt-6 text-center">
        Loading...
      </div>
    )
  }

  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionName`} component={CollectionPage} />
    </>
  )
}

const mapState = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatch = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapState, mapDispatch)(StorePage)
