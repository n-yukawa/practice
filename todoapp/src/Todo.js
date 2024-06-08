import { useState, useEffect } from 'react'
import { Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const label = { inputProps: { 'aria-label': 'Star this task' } };

const Todo = ({ 
    todo, 
    toggleTodo, 
    handleDelete, 
    handleNameChange, 
    handlePriorityChange, 
    starredTasks, 
    setStarredTasks,
}) => {

    const [name, setName] = useState(todo.name);
    const [deadline, setDeadline] = useState('');
    const isStarred = starredTasks.includes(todo.id);

    const handleNameChangeLocal = (e) => {
        setName(e.target.value)
    };

    useEffect(() => {
        setName(todo.name);
    }, [todo.name]);

    const handleDateChange = (e) => {
        setDeadline(e.target.value);
    };

    const handleStarChange = () => {
        if(isStarred) {
            setStarredTasks(starredTasks.filter(id => id !== todo.id)); // スター付きタスクから削除
        } else {
            setStarredTasks([...starredTasks, todo.id]); // スター付きタスクに追加
        }
    };

    return (
        <div className={`todo-wrap ${todo.completed ? 'completed' : ''}`}>
            <label>
                <Checkbox
                    size="small"
                    checked={todo.completed}
                    readOnly
                    onChange={() => toggleTodo(todo.id)}
                />
            </label>

            <div className="todo-name">
                <input
                    className={todo.completed ? 'completed' : ''}
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
                // sx={{ mx: 1 }}  
                /* mx: mはmargin、xはleftとright両方 */
                onClick={() => handleDelete(todo.id)}                
            />
            
            <div className={`hover-content ${isStarred ? 'always-visible' : ''}`}>
                <Checkbox 
                    size="small"
                    {...label} icon={<StarBorderIcon />} checkedIcon={<StarIcon />}
                    checked={isStarred}
                    onChange={handleStarChange}
                />
            </div>
        </div>
    );
};

export default Todo