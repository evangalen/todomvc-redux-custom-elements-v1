import {ADD_TODO, MARK_TODO, REMOVE_TODO} from './action-types';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    };
}

export function markTodo(index) {
    return {
        type: MARK_TODO,
        payload: index
    };
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}
