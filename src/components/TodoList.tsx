import React from 'react';

import TodoItem from './TodoItem';
import './style.css';
import { useCartState } from '../context/context';

const TodoList: React.FC = () => {
  const { state } = useCartState();
  /* DONE: Add message with "there is no todos in your list" */
  return (
    <div className='todos'>
      {state.length > 0 ? (
        state.map((todo) => <TodoItem key={todo.id} todo={todo}></TodoItem>)
      ) : (
        <div className='text'>What do you have to do today? Add task :D</div>
      )}
    </div>
  );
};

export default TodoList;
