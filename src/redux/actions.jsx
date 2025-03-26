export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id,
});

export const login = () => ({
    type: LOGIN,
});

export const logout = () => ({
    type: LOGOUT,
});