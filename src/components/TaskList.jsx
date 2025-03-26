import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
};

const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    return (
        <ul>
            {sortedTasks.map((task) => (
    <li key={task.id}>
        <span>{task.text} - {task.priority}</span>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
))}
        </ul>
    );
};

export default TaskList;