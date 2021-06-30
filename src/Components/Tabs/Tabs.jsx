import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from 'Redux/user.selectors'
import { selectCartHidden } from 'Redux/cart.selectors'
import { auth } from 'Firebase/firebase.utils'
import { CartDropdown, CartIcon } from 'Components'

import './Tabs.css'

const Tabs = ({ currentUser, hidden }) => (
  <div className="bo-tabs">
    <ul>
      <li><NavLink exact to="/" activeClassName="is-active">Home</NavLink></li>
      <li><NavLink to="/store" activeClassName="is-active">Store</NavLink></li>
      {
        currentUser
        ? <li><a onClick={() => auth.signOut()}>Logout</a></li>
        : (
          <>
            <li><NavLink exact to="/login" activeClassName="is-active">Login</NavLink></li>
            <li><NavLink exact to="/register" activeClassName="is-active">Register</NavLink></li>
          </>
        )
      }
      <li><NavLink exact to="/about" activeClassName="is-active">About</NavLink></li>
      <li><CartIcon /></li>
    </ul>
    {
      hidden
      ? null
      : <CartDropdown />
    }
  </div>
)

const mapState = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapState)(Tabs)
