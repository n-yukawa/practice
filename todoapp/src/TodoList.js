import React from 'react'
import Todo from "./Todo";

const TodoList = ( { 
  todos, 
  toggleTodo, 
  handleDelete, 
  handleNameChange, 
  handlePriorityChange, 
  toggleStar, 
}) => {
  
  return (
    todos.map((todo) => 
      <Todo 
        todo={todo} 
        toggleTodo={toggleTodo} 
        toggleStar={toggleStar}
        handleDelete={handleDelete} 
        handleNameChange={handleNameChange} 
        handlePriorityChange={handlePriorityChange} 
      />
    )
  );
};

export default TodoList