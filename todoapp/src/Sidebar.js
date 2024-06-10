import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Sidebar = ({ todos, setFilteredTodos, selectedIndex, setSelectedIndex, updateFilteredTodos }) => {
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        updateFilteredTodos(todos, index);
    };
  
    return (
        <>
            <List component="nav">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <TaskAltOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="未完了" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="スター付き" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav">
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <DoneAllIcon />
                    </ListItemIcon>
                    <ListItemText primary="完了" />
                </ListItemButton>
            </List>
        </>
    );
};

export default Sidebar
