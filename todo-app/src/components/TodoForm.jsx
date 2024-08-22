import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { useState } from "react";

function TodoForm() {

    const dispatch = useDispatch();
    const [todoTask, setTodoTask] = useState("");

    function handleAddTodo(task) {
        dispatch(addTodo(task));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        handleAddTodo(todoTask);
        setTodoTask("");
    }

    return (
        <div className="mt-10">
            <form 
                onSubmit={handleSubmit}
                className="flex items-center justify-between"
            >
            <input 
                value={todoTask}
                onChange={(e) => setTodoTask(e.target.value)}
                required
                type="text"
                placeholder="Quelle note souhaitez-vous ajouter ?"
                className="flex-grow py-3 px-2 mr-5 border-2 border-gray-300 focus:border-b-blue-800 focus:outline-none text-gray-600 hover:border-blue-800"
            />
            <button 
                type="submit"
                className="flex items-center justify-center border-2 rounded-md hover:bg-blue-900 border-blue-900 bg-white text-blue-900 hover:text-white py-3 px-3"
            >
                <p>Ajouter</p>
                <span className="text-3xl ml-1"><BsPlus/></span>
            </button>
        </form>
        </div>
    )
}

export default TodoForm
