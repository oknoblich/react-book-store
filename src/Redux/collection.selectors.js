import { createSelector } from 'reselect'

const selectCollection = (state) => state.collection

export const selectCollectionSections = createSelector(
  [selectCollection],
  (collection) => collection.sections
)

export const selectCollectionSectionsAsArray = createSelector(
  [selectCollectionSections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const selectCollectionSection = (collectionUrlParam) => (
  createSelector(
    [selectCollectionSections],
    (collections) => collections ? collections[collectionUrlParam] : null
  )
)

export const selectIsCollectionFetching = createSelector(
  [selectCollection],
  (collection) => collection.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectCollection],
  (collection) => !!collection.sections
)
