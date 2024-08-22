import TodoForm from "./components/TodoForm"
import TodoListBox from "./components/TodoListBox"
import TodoWrapper from "./components/TodoWrapper"
import './App.css'

function App() {

  return (
    <div>
      <TodoWrapper>
        <TodoForm/>
        <TodoListBox/>
      </TodoWrapper>
    </div>
  )
}

export default App
