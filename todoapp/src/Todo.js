import { useState } from 'react'
import { Checkbox, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleTodo, handleDelete, handlePriorityChange }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };
    
    const [ deadline, setDeadline ] = useState('');

    const handleDateChange = (e) => {
        setDeadline(e.target.value);
    };

    return (
        <div className="todo-wrap">
            <label>
                <Checkbox 
                    size="small"
                    checked={todo.completed} 
                    readOnly 
                    onChange={handleTodoClick}
                />
            </label>
            <div className="todo-txt">{todo.name}</div>

            <div>
                {/* 優先度表示 */}
                <select
                    className={`select-priority ${todo.priority}`}
                    value={todo.priority || "normal"}
                    onChange={(e) => handlePriorityChange(todo.id, e.target.value)}
                >
                <option value="high">high</option>
                <option value="normal">normal</option>
                <option value="low">low</option>
                </select>
            </div>

            <label className="deadline"> {/* 期限 */}
                <input 
                    type="date"
                    value={deadline}
                    onChange={handleDateChange}
                />
            </label>

            <div className="delete-btn">
                <Button size="small" variant="outlined" endIcon={<DeleteIcon style={{marginLeft: -8}} />} onClick={() => handleDelete(todo.id)}>
                    削除
                </Button>
            </div>
        </div>
    );
};

export default Todo