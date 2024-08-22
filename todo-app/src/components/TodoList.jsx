import { useSelector } from "react-redux"
import Todo from "./Todo";
import TodoFormEdit from "./TodoFormEdit";

function TodoList() {

    const todos = useSelector((state) => state.todos)

    return (
        <ul className="py-6 px-6 max-h-80 border-gray-300 border-2 hover:border-blue-900 rounded-md bg-white overflow-y-scroll">
            {
                todos.map((todo) => (
                    todo.isEditing ? (
                        <TodoFormEdit key={todo.id} index={todo.id} todo={todo}/>
                    ) :
                    (
                        <Todo todo={todo} key={todo.id}/>
                    )
                ))
            }
        </ul>
    )
}

export default TodoList