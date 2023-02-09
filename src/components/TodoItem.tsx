import React, { useState, useRef, useEffect } from 'react'
import { Todo } from './model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
  IoMdCheckmark,
} from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'

import { useCartState } from '../context/context'

type TodosProps = {
  todo: Todo
}
// DONE Change name to TodoItem
const TodoItem: React.FC<TodosProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editName, setEditName] = useState<string>(todo.desription)
  const { dispatch } = useCartState()

  const handleDoneClick = () => {
    dispatch({ type: 'done', payload: todo.id })
  }

  const handleDeleteClick = () => {
    dispatch({ type: 'remove', payload: todo.id })
  }

  const handleEditClick = (e: React.FormEvent) => {
    console.log(editName)
    e.preventDefault()
    dispatch({ type: 'edit', payload: { id: todo.id, todo: editName } })
    setIsEditing(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  return (
    <form
      className='todos__single'
      onSubmit={(e: React.FormEvent) => handleEditClick(e)}
    >
      {isEditing ? (
        <input
          type='input'
          ref={inputRef}
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          className='todos__single--text'
        ></input>
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.desription}</s>
      ) : (
        <span className='todos__single--text'>{todo.desription}</span>
      )}

      <div>
        {!isEditing && !todo.isDone && (
          <button
            className='icon'
            onClick={() => {
              if (!isEditing && !todo.isDone) {
                setIsEditing(!isEditing)
              }
            }}
          >
            <AiFillEdit />
          </button>
        )}
        {!isEditing && (
          <button className='icon'>
            <AiFillDelete onClick={() => handleDeleteClick()} />
          </button>
        )}
        {!isEditing && (
          <button className='icon' onClick={() => handleDoneClick()}>
            {todo.isDone ? (
              <IoIosCheckmarkCircle />
            ) : (
              <IoIosCheckmarkCircleOutline />
            )}
          </button>
        )}
        {/* 
        {isEditing && (
          <button className='icon' onClick={() => setIsEditing(!isEditing)}>
            <MdOutlineCancel />
          </button>
        )} */}

        {/* {isEditing && (
          <button className='icon' type='submit'>
            <IoMdCheckmark />
          </button>
        )} */}
      </div>
    </form>
  )
}

export default TodoItem
