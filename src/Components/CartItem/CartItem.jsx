import React from 'react'

import './CartItem.css'

const CartItem = ({ cartItem: { imageUrl, name, price, quantity } }) => (
  <div className="cart-item">
    <div className="cart-item-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="cart-item-info">
      {name}
      <br />
      {quantity} x {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(price)}
    </div>
  </div>
)

export default CartItem
