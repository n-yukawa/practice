import React from 'react'
import Todo from "./Todo";

const TodoList = ( { 
  todos, 
  toggleTodo, 
  handleDelete, 
  handleNameChange, 
  handlePriorityChange, 
  starredTasks, 
  setStarredTasks,  
}) => {
  
  return (
    todos.map((todo) => 
      <Todo 
        todo={todo} 
        toggleTodo={toggleTodo} 
        handleDelete={handleDelete} 
        handleNameChange={handleNameChange} 
        handlePriorityChange={handlePriorityChange} 
        starredTasks={starredTasks} 
        setStarredTasks={setStarredTasks} 
      />
    )
  );
};

export default TodoList