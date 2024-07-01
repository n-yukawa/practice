import { useState, useRef } from "react";
import TodoList from "./TodoList";
import Sidebar from "./Sidebar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { 
  Stack, 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const name = inputRef.current.value;
    if(name === "") return;
    const newTodo = {id: uuidv4(), name: name, completed: false, starred: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    inputRef.current.value = null;
    updateFilteredTodos(newTodos, selectedIndex);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if(todo) {
      todo.completed = !todo.completed;
      setTodos(newTodos);
      updateFilteredTodos(newTodos, selectedIndex);
    }
  };

  const toggleStar = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if(todo) {
      todo.starred = !todo.starred;
      setTodos(newTodos);
      updateFilteredTodos(newTodos, selectedIndex);
    }
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    updateFilteredTodos(newTodos, selectedIndex);
  };

  const handleDelete = (id) => {
    const newTodos = (todos.filter((todo) => todo.id !== id));
    setTodos(newTodos);

    updateFilteredTodos(newTodos, selectedIndex);
  };

  // タイトル編集
  const handleNameChange = (id, newName) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) =>
        todo.id === id ? {...todo, name: newName} : todo
      );
      updateFilteredTodos(newTodos, selectedIndex);
      return newTodos;
    });
  };

  // 優先度を変更する関数
  const handlePriorityChange = (id, priority) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: priority } : todo
      );
      updateFilteredTodos(newTodos, selectedIndex);
      return newTodos;
    });
  };

  const updateFilteredTodos = (todos, index) => {
    switch (index) {
      case 0:
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      case 1:
        setFilteredTodos(todos.filter(todo => todo.starred));
        break;
      case 2:
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const renderCount = () => {
    switch (selectedIndex) {
      case 0:
        return <div className="count-incomplete">未完了: {todos.filter((todo) => !todo.completed).length}</div>;
      case 1:
        return <div className="count-starred">スター付き: {todos.filter((todo) => todo.starred).length}</div>;
      case 2:
        return <div className="count-completed">完了: {todos.filter((todo) => todo.completed).length}</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ml: 0 , p: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo List
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="container">
        <div className="sidebar">
          <Sidebar 
            todos={todos} 
            setFilteredTodos={setFilteredTodos}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            updateFilteredTodos={updateFilteredTodos}
          />
        </div>

        <div className={"main-wrap"}>
          <div className="input-wrap">
            <Stack direction="row" spacing={1}>
              <input type="text" ref={inputRef} />
              <Button size="small" variant="contained" endIcon={<AddIcon style={{marginLeft: -8}}　/>} onClick={handleAddTodo}>タスクを追加</Button>
              <Button size="small" variant="outlined" endIcon={<DeleteIcon style={{marginLeft: -8}}　/>} onClick={handleClear}>完了したタスクの削除</Button>
            </Stack>
          </div>

          {renderCount()}

          <TodoList 
            todos={filteredTodos} 
            toggleTodo={toggleTodo} 
            toggleStar={toggleStar} 
            handleDelete={handleDelete} 
            handleNameChange={handleNameChange} 
            handlePriorityChange={handlePriorityChange} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
