import { ADD_TODO, DELETE_TODO, EDIT_TODO, EDIT_TODO_TASK, MARK_ALL_COMPLETED, MARK_ALL_INCOMPLETED, TOGGLE_TODO } from "./actionTypes";

let nextID = 0;

const INITIAL_STATE = {
    todos: [],
};

const todoReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [{task: action.payload.task, id: nextID++, completed: false, isEditing: false}, ...state.todos]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
                ))
            };

        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    {...todo, completed: true}
                ))
            }
        
        case MARK_ALL_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    {...todo, completed: false}
                ))
            }

        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload.id ? {...todo, isEditing: !todo.isEditing} : todo
                ))
            }

        case EDIT_TODO_TASK:
            return {
                ...state,
                todos: state.todos.map((todo) => (
                    todo.id === action.payload.id ? {...todo, task: action.payload.task, isEditing: !todo.isEditing} : todo
                ))
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => (
                    todo.id !== action.payload.id
                ))
            };

        default:
            return state;
    }
};

export default todoReducer;