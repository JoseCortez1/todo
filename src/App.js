/** @format */

import "./App.css"
import { TodoProvider } from "./Context/TodoContext"
import { TodoApp } from "./TodoApp"

function App() {
	return (
		<TodoProvider>
			<TodoApp />
		</TodoProvider>
	)
}

export default App
