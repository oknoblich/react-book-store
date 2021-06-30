import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from 'Redux/cart.actions'
import { selectCartItems } from 'Redux/cart.selectors'
import { CartItem, CustomButton } from 'Components'

import './CartDropdown.css'

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown-items">
      {
        cartItems.length > 0
        ? cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)
        : 'Cart is empty.'
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        toggleCartHidden()
      }}
    >Go to Checkout</CustomButton>
  </div>
)

const mapState = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatch = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapState, mapDispatch)(CartDropdown))
