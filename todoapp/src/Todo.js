import { useState, useEffect } from 'react'
import { Checkbox, IconButton, Tooltip } from "@mui/material";
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
    const [tooltipOpen, setTooltipOpen] = useState({ complete: false, star: false });
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

    const handleTooltipOpen = (type) => {
        setTooltipOpen((prev) => ({ ...prev, [type]: true }));
    };

    const handleTooltipClose = (type) => {
        setTooltipOpen((prev) => ({ ...prev, [type]: false }));
    };

    const handleStarChange = () => {
        if (isStarred) {
            setStarredTasks(starredTasks.filter(id => id !== todo.id)); // スター付きタスクから削除
        } else {
            setStarredTasks([...starredTasks, todo.id]); // スター付きタスクに追加
        }
        handleTooltipClose('star'); // チェック時にツールチップを閉じる
    };

    const handleToggleTodo = () => {
        toggleTodo(todo.id);
        handleTooltipClose('complete'); // チェック時にツールチップを閉じる
    };

    return (
        <div className={`todo-wrap ${todo.completed ? 'completed' : ''}`}>
            <Tooltip
                title={todo.completed ? "未完了とする" : "完了とする"}
                disableInteractive
                open={tooltipOpen.complete}
                onOpen={() => handleTooltipOpen('complete')}
                onClose={() => handleTooltipClose('complete')}
                slotProps={{
                    popper: {
                        modifiers: [{
                            name: 'offset',
                            options: { offset: [0, -14], },
                        },],
                    },
                }}
            >
                <Checkbox
                    size="small"
                    checked={todo.completed}
                    readOnly
                    onChange={handleToggleTodo}
                />
            </Tooltip>

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

            <Tooltip
                title="削除"
                disableInteractive
                slotProps={{
                    popper: {
                        modifiers: [{
                            name: 'offset',
                            options: { offset: [0, -14], },
                        },],
                    },
                }}
            >
                <IconButton onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon
                        fontSize="small"
                    />
                </IconButton>
            </Tooltip>
            
            <div className={`hover-content ${isStarred ? 'always-visible' : ''}`}>
                <Tooltip
                    title={isStarred ? "[スター付き] から削除" : "[スター付き] に追加"}
                    disableInteractive
                    open={tooltipOpen.star}
                    onOpen={() => handleTooltipOpen('star')}
                    onClose={() => handleTooltipClose('star')}
                    slotProps={{
                        popper: {
                            modifiers: [{
                                name: 'offset',
                                options: { offset: [0, -14], },
                            },],
                        },
                    }}
                >
                    <Checkbox
                        size="small"
                        {...label} icon={<StarBorderIcon />} checkedIcon={<StarIcon />}
                        checked={isStarred}
                        onChange={handleStarChange}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default Todo