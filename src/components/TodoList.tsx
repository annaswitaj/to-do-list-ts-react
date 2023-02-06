import React from 'react'

import SingleTodo from './SingleTodo'
import './style.css'
import { useCartState } from '../context/context'

const TodoList: React.FC = () => {
  const { state } = useCartState()
  return (
    <>
      {state.length > 0 && (
        <div className='todos'>
          {state.map((todo) => (
            <SingleTodo key={todo.id} todo={todo}></SingleTodo>
          ))}
        </div>
      )}
    </>
  )
}

export default TodoList
