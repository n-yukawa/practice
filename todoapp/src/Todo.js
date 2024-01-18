import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

const Todo = ({ todo, toggleTodo, handleDelete }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };

    return (
        <div className="todo-wrap">
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    readOnly 
                    onChange={handleTodoClick}
                />
            </label>
            <div className="todo-txt">{todo.name}</div>
            <div className="delete-btn">
                <Button size="small" variant="outlined" endIcon={<DeleteIcon style={{marginLeft: -8}} />} onClick={() => handleDelete(todo.id)}>
                    削除
                </Button>
            </div>
        </div>
    );
};

export default Todo