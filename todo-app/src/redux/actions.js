import { ADD_TODO, DELETE_TODO, EDIT_TODO, EDIT_TODO_TASK, MARK_ALL_COMPLETED, MARK_ALL_INCOMPLETED, TOGGLE_TODO } from "./actionTypes";


export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: {task}
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: {id}
    };
}

export function editTodo(id) {
    return {
        type: EDIT_TODO,
        payload: {id}
    };
}

export function editTodoTask(id, task) {
    return {
        type: EDIT_TODO_TASK,
        payload: {id, task}
    };
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: {id}
    };
}

export function markAllCompleted() {
    return {
        type: MARK_ALL_COMPLETED,
    };
}

export function markAllInCompleted() {
    return {
        type: MARK_ALL_INCOMPLETED,
    };
}
