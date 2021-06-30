import React from 'react'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`bo-button ${isGoogleSignIn ? 'is-secondary' : 'bg-alcohol'}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
