import { FaPen } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
function TodoWrapper({ children }) {
  return (
    <div className="bg-white w-3/5 mx-auto px-10 pt-6 py-8 mt-7 rounded-2xl">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-center text-blue-900">Mon Application Todo-List</h1>
          <span className="text-2xl ml-4 font-bold text-blue-900"><FaPen/></span>
        </div>
        {children}
    </div>
  )
}

export default TodoWrapper