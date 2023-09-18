import React from 'react'
import Todo from "./Todo";

const TodoList = ( { todos, toggleTodo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
  //map関数->todosの配列の中身を一つ一つ取り出す
  //(todo)変数に入れて、<Todo />コンポーネントに渡す
  //key={todo} ->ユニークなkeyである必要があるため、あまり好ましくない書き方（同じ名前のタスクがあると、keyが重複してしまう）
  //key uuid（ライブラリ）を使うと重複が起こらない
    //ターミナルで「npm install uuid」を入力し、インストールする。package.jsonにuuidが追加されている。
};

export default TodoList