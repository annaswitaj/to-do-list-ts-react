import React, { useRef, useState } from 'react'
import './style.css'
import { useCartState } from '../context/context'

const InputField: React.FC = () => {
  //TODO: lack of semicolons
  const inputRef = useRef<HTMLInputElement>(null)
  const { dispatch } = useCartState()
  const [todo, setTodo] = useState('')

  //DONE: extract this function to variable handleSubmit
  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      dispatch({
        type: 'add',
        payload: todo,
      })
      setTodo('')
    }
    inputRef.current?.blur()
  }

  return (
    // TODO: use flex on form instead of relative/absolute
    <form
      className='input'
      onSubmit={(e: React.FormEvent) => handleSubmitClick(e)}
    >
      <input
        ref={inputRef}
        type='input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='input__box'
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
