import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import { login, logout } from './redux/actions';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    const [username, setUsername] = useState('');
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (username) {
            dispatch(login());
            setUsername('');
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="app-container">
            <h1>To-Do Application</h1>
            {!isAuthenticated ? (
                <div className="login-container">
                    <input
                        type="placeholder"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome!</h2>
                    <TaskInput/>
                    <TaskList/>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;