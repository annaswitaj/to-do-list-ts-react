import React, { createContext, useContext, useReducer } from 'react'

import { Todo } from '../components/model'
import { reducer, Action } from './reducer'

interface CartContextProvider {
  state: Todo[]
  dispatch: React.Dispatch<Action>
}

export const CartContext = createContext<CartContextProvider | null>(null)

interface Props {
  children: React.ReactNode
}

const Context: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default Context

export const useCartState = () => {
  const cartState = useContext(CartContext)
  if (!cartState) {
    throw new Error(`You forgot CartContextProvider!`)
  }
  return cartState
}
