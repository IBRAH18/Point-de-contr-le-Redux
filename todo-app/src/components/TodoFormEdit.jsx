/* eslint-disable react/prop-types */
import { BsCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { editTodoTask } from "../redux/actions";
import { useState } from "react";

function TodoFormEdit({ index, todo }) {

    const dispatch = useDispatch();
    const [todoTask, setTodoTask] = useState(todo.task);

    function handleEditTodo(id, task) {
        dispatch(editTodoTask(id, task));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        handleEditTodo(index, todoTask);
        setTodoTask("");
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className="flex items-center justify-between"
            >
            <input 
                value={todoTask}
                onChange={(e) => setTodoTask(e.target.value)}
                required
                type="text"
                placeholder="Modifiez votre tache"
                className="flex-grow py-3 px-2 mr-5 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none"
            />
            <button 
                type="submit"
                className="flex items-center justify-center hover:bg-green-500 border-green-500 bg-green-500 text-white py-2 px-3"
            >
                <p>Enregistrer</p>
                <span className="text-3xl ml-1"><BsCheck/></span>
            </button>
        </form>
        </div>
    )
}

export default TodoFormEdit
