/* eslint-disable react/prop-types */
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/actions";

function Todo({ todo }) {

    const dispatch = useDispatch();

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-b-gray-300 py-3 gap-7 text-gray-600">
            <div>
                {
                    !todo.completed && (
                        <button
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className="mr-3 text-sm bg-gray-300 text-white sm:px-2 py-1 px-1 rounded"
                        >
                            <FaCheck/>
                        </button>
                    )
                }
                {
                    todo.completed && (
                        <button
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className="mr-3 text-sm bg-green-500 text-white sm:px-2 py-1 px-1 rounded"
                        >
                            <FaCheck/>
                        </button>
                    )
                }
                <span className={`mr-4 ${todo.completed && "line-through text-green-500" }`}>
                    {todo.task}
                </span>
            </div>
            <div>
                <button 
                    onClick={() => dispatch(editTodo(todo.id))}
                    className="mr-3 text-sm bg-yellow-400 text-white sm:px-2 py-1 px-1 rounded"
                >
                    <FaEdit/>
                </button>
                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="text-sm bg-red-400 text-white sm:px-2 py-1 px-1 rounded"
                >
                    <FaTrash/>
                </button>
            </div>
        </li>
    )
}

export default Todo