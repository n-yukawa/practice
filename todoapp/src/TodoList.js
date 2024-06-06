import React from 'react'
import Todo from "./Todo";

const TodoList = ( { todos, toggleTodo, handleDelete, handleNameChange, handlePriorityChange }) => {
  return (
    todos.map((todo) => 
      <Todo 
        todo={todo} 
        toggleTodo={toggleTodo} 
        handleDelete={handleDelete} 
        handleNameChange={handleNameChange}
        handlePriorityChange={handlePriorityChange} 
      />
    )
  );
};

export default TodoList