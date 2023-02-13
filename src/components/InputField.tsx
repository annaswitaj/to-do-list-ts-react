import React, { useRef, useState } from 'react';
import './style.css';
import { useCartState } from '../context/context';

const InputField: React.FC = () => {
  const inputRef = useRef<HTMLFormElement>(null);
  const { dispatch } = useCartState();
  const [description, setDescription] = useState('');

  const handleSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (description) {
      dispatch({
        type: 'add',
        payload: description,
      });
      setDescription('');
    }
    inputRef.current?.blur();
  };

  return (
    <form
      className='input'
      ref={inputRef}
      onSubmit={(e: React.FormEvent) => handleSubmitClick(e)}
    >
      <input
        type='input'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          inputRef.current?.focus();
        }}
        placeholder='Enter a task'
        className='input__box'
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
