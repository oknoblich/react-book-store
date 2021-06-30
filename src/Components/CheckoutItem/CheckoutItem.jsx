import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem, clearItem } from 'Redux/cart.actions'

import './CheckoutItem.css'

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="row align-items-center">
        <div className="col-2"><div className="checkout-image" style={{ backgroundImage: `url(${imageUrl})` }} /></div>
        <div className="col-3">{name}</div>
        <div className="col-3">
          <div className="d-flex align-items-center">
            <a className="inc-dec" onClick={() => removeItem(cartItem)}>
              <div className="icon icon-arrowleft-gray-1"></div>
            </a>
            <span>{quantity}</span>
            <a className="inc-dec" onClick={() => addItem(cartItem)}>
              <div className="icon icon-arrowright-gray-1"></div>
            </a>
          </div>
        </div>
        <div className="col-2 text-right">
          {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}
        </div>
        <div className="col-2">
          <div className="d-flex justify-content-end">
            <a onClick={() => clearItem(cartItem)}>
              <div className="icon icon-close-gray-1"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => ({
  addItem: (cartItem) => dispatch(addItem(cartItem)),
  removeItem: (cartItem) => dispatch(removeItem(cartItem)),
  clearItem: (cartItem) => dispatch(clearItem(cartItem))
})

export default connect(null, mapDispatch)(CheckoutItem)
