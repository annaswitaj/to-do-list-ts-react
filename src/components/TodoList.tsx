import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo'
import './styles.css'

interface TodosProps {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return <SingleTodo></SingleTodo>
      })}
    </div>
  )
}

export default TodoList
