import { useState, useEffect } from 'react'
import { Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleTodo, handleDelete, handleNameChange, handlePriorityChange }) => {
    const [name, setName] = useState(todo.name);
    const [deadline, setDeadline] = useState('');

    const handleNameChangeLocal = (e) => {
        setName(e.target.value)
    };

    useEffect(() => {
        setName(todo.name);
    }, [todo.name]);

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
                    onChange={() => toggleTodo(todo.id)}
                />
            </label>

            <div className="todo-txt">
                <input 
                    type="text"
                    value={name}
                    onChange={handleNameChangeLocal}
                    onBlur={() => handleNameChange(todo.id, name)}  // focusが外れたときに変更を保存
                />
            </div>

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

            <DeleteIcon 
                fontSize="small"
                sx={{ mx: 1 }}  /* mx: mはmargin、xはleftとright両方 */
                onClick={() => handleDelete(todo.id)}
            />
        </div>
    );
};

export default Todo