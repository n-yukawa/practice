import { useState, useRef } from "react";
import TodoList from "./TodoList";
import './App.css';
import { v4 as uuidv4 } from "uuid";
//uuidのインポートの仕方はドキュメントを確認

//MUIを追加
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [todos, setTodos] = useState([]);
  // useState->変数を監視・管理するために使われているHooks
  // todos->これから追加していくタスク（オブジェクト）
  //todoを追加したタイミングで画面自体が再レンダリング（更新）される
  //todosの変数が変わったときだけページを更新することができるため、無駄な再レンダリングを防げる

  const todoNameRef = useRef();
  //まず、入力された文字列を取得するために、useRef（Hooks）を追加する

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    if(name === "") return;
    //入力値が空の場合は終了
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
    //入力が終わったら、値をnullにする
  };
    //...prevTodos->スプレッド構文
    //prevTodos = previousTodos = 「前のタスク」の状態に対して、新しいタスクを追加していく
    //id: uuidv4()->ランダムな文字列がidに割り振られる

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    //todosの中のオブジェクトをnewTodosにコピーしている
    //状態変数で管理されているtodosを直接触るのはあまり好ましくない
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

  // 優先度を変更する関数
  const handlePriorityChange = (id, priority) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, priority: priority } : todo
      )
    );
  };

  return (
    //最初のtodosはprops。todosという名前で渡してね。{}の中が渡したい変数名
    <div className={"main-wrap"}>
      <h1>Todo List</h1>
      <div className="input-wrap">
        <Stack direction="row" spacing={1}>
          <input type="text" ref={todoNameRef} />
          <Button size="small" variant="contained" endIcon={<AddIcon style={{marginLeft: -8}}　/>} onClick={handleAddTodo}>タスクを追加</Button>
          <Button size="small" variant="outlined" endIcon={<DeleteIcon style={{marginLeft: -8}}　/>} onClick={handleClear}>完了したタスクの削除</Button>
        </Stack>
      </div>
      <div className="nokori">残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo} handleDelete={handleDelete} handlePriorityChange={handlePriorityChange} />
    </div>
  );
}

export default App;
