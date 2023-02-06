import React, { useState, useReducer } from 'react'

import './App.css'
import InputField from './components/InputField'
import { Todo } from './components/model'
import { reducer } from './context/reducer'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField></InputField>
      <TodoList></TodoList>
    </div>
  )
}

export default App
