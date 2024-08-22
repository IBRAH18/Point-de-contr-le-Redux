import { useDispatch } from "react-redux"
import TodoList from "./TodoList"
import { markAllCompleted, markAllInCompleted } from "../redux/actions";

function TodoListBox() {

    const dispatch = useDispatch();

    return (
        <div className="mt-6">
            <div>
                <button 
                    onClick={() => dispatch(markAllCompleted())}
                    className="px-2 py-2 border bg-green-500 text-white rounded focus:outline-none hover:bg-green-600"
                >
                    Tout Cocher
                </button>
                <button 
                    onClick={() => dispatch(markAllInCompleted())}
                    className="px-2 py-2 border bg-gray-400 text-white rounded ml-4 focus:outline-none hover:bg-gray-500"
                >
                    Tout Décocher
                </button>
            </div>
            <p className="my-6 italic text-gray-600">Liste complète de vos notes ...</p>
            <TodoList/>
        </div>
    )
}

export default TodoListBox
