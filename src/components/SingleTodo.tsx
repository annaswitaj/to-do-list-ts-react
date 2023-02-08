import React, { useState, useRef, useEffect } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from 'react-icons/io'

import { useCartState } from '../context/context'

type TodosProps = {
  todo: Todo
}

// TODO Change name to TodoItem
const SingleTodo: React.FC<TodosProps> = ({ todo }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editName, setEditName] = useState<string>(todo.todo)
  const { dispatch } = useCartState()

  const handleDone = () => {
    dispatch({ type: 'done', payload: todo.id })
  }

  const handleDelete = () => {
    dispatch({ type: 'remove', payload: todo.id })
  }

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch({ type: 'edit', payload: { id: todo.id, todo: editName } })
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className='todos__single--text'
        ></input>
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon'>
          <AiFillDelete onClick={() => handleDelete()} />
        </span>
        <span className='icon' onClick={() => handleDone()}>
          {todo.isDone ? (
            <IoIosCheckmarkCircle />
          ) : (
            <IoIosCheckmarkCircleOutline />
          )}
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
