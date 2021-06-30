export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

  let newCartItemsArray

  if (existingCartItem) {
    newCartItemsArray = cartItems.map((cartItem) => (
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ))
  } else {
    newCartItemsArray = [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }

  return newCartItemsArray
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

  let newCartItemsArray

  if (existingCartItem.quantity !== 1) {
    newCartItemsArray = cartItems.map((cartItem) => (
      cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ))
  } else {
    newCartItemsArray = cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return newCartItemsArray
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  let newCartItemsArray

  newCartItemsArray = cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

  return newCartItemsArray
}
