import React from 'react';
import axios from 'axios';

import styles from './todo.module.css';

const Todo = ({ todo, reloadTodos }) => {
  const handleUpdateTodo = async event => {
    event.preventDefault();

    await axios.post('/api/update-todo', {
      id: todo._id,
      text: todo.text,
      completed: !todo.completed
    });

    reloadTodos();
  };
  return (
    <p
      className={`${styles.text} ${todo.completed && styles.completed}`}
      onClick={handleUpdateTodo}
    >
      {todo.text}
    </p>
  );
};

export default Todo;
