import React from 'react'
import { connect } from 'react-redux'

import { addItem } from 'Redux/cart.actions'
import { CustomButton } from 'Components'

import './CollectionItem.css'

const CollectionItem = ({ item, item: { imageUrl, name, price }, addItem }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="footer">
      <div className="name">{name}</div>
      <div className="price">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}</div>
    </div>
    <CustomButton onClick={() => addItem(item)}>Add to Cart</CustomButton>
  </div>
)

const mapDispatch = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatch)(CollectionItem)
