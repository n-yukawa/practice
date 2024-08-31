import React from 'react'
import Todo from "./Todo";
import { Reorder } from "framer-motion";

const TodoList = ({
  todos,
  toggleTodo,
  handleDelete,
  handleNameChange,
  handlePriorityChange,
  toggleStar,
}) => {

  return (
    todos.map((todo) => (
      <Reorder.Item key={todo} value={todo} >
        <Todo
          todo={todo}
          toggleTodo={toggleTodo}
          toggleStar={toggleStar}
          handleDelete={handleDelete}
          handleNameChange={handleNameChange}
          handlePriorityChange={handlePriorityChange}
        />
      </Reorder.Item>
    ))
  );
};

export default TodoList