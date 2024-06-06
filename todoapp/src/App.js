import { useState, useRef } from "react";
import TodoList from "./TodoList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Stack, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const name = inputRef.current.value;
    if(name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
    });
    inputRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // タイトル編集
  const handleNameChange = (id, newName) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id ? {...todo, name: newName} : todo
      )
    );
  };

  // 優先度を変更する関数
  const handlePriorityChange = (id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: priority } : todo
      )
    );
  };

  return (
    <div className={"main-wrap"}>
      <h1>Todo List</h1>
      <div className="input-wrap">
        <Stack direction="row" spacing={1}>
          <input type="text" ref={inputRef} />
          <Button size="small" variant="contained" endIcon={<AddIcon style={{marginLeft: -8}}　/>} onClick={handleAddTodo}>タスクを追加</Button>
          <Button size="small" variant="outlined" endIcon={<DeleteIcon style={{marginLeft: -8}}　/>} onClick={handleClear}>完了したタスクの削除</Button>
        </Stack>
      </div>
      <div className="nokori">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        handleDelete={handleDelete} 
        handleNameChange={handleNameChange}
        handlePriorityChange={handlePriorityChange} 
      />
    </div>
  );
}

export default App;
