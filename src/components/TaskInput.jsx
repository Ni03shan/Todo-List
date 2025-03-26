import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium'); // Default priority
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task) {
            const newTask = { id: Date.now(), text: task, priority }; // Include priority
            dispatch(addTask(newTask));
            setTask('');
            setPriority('Medium'); // Reset priority to default
        }
    };

    return (
        <div>
            <input
                type="placeholder"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;