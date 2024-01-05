import { useState } from 'react'
import Button from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import './Icons.css'

const Todo = ({ todo, toggleTodo, setTodos }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };
    const handleDelete = () => {
        const newTodos = 
        setTodos(newTodos);
    };

    // const onClickDelete = () => {
    //     alert("削除");
    // };


    return (
        <div className="wrap">
            <label>
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    readOnly 
                    onChange={handleTodoClick}
                />
            </label>
            {todo.name}
            {/* ここから追加 */}
            <div className="icon_area"
                onClick={handleDelete}
            >
                <DeleteIcon className="icon" 
                />
                <span className="icon_text">削除</span>
            </div>
        </div>
    );
};

export default Todo