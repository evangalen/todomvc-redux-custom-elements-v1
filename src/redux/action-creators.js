import { ADD_TODO, SET_TODO_COMPLETED } from './action-types';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    };
}

export function setTodoCompleted(index, completed) {
    return {
        type: SET_TODO_COMPLETED,
        payload: {index, completed}
    };
}
