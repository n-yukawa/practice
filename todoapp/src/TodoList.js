import React from 'react'
import Todo from "./Todo";

const TodoList = ( { todos, toggleTodo, handleDelete, handlePriorityChange }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete} handlePriorityChange={handlePriorityChange} />);
};

export default TodoList