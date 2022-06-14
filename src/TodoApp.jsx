/** @format */

import { useEffect, useState } from "react"
import "./App.css"
import CreateTodo from "./Components/CreateTodo/CreateTodo"
import NoCoincidences from "./Components/NoCoincidence/NoCoincidences"
import TodoCounter from "./Components/TodoCounter/TodoCounter"
import TodoItem from "./Components/TodoItem/TodoItem"
import TodoList from "./Components/TodoList/TodoList"
import TodoSearch from "./Components/TodoSearch/TodoSearch"
import todos from "./todos.json"
const TodoApp = () => {
	const [filter, setFilter] = useState([])
	const [to_dos, setTodo] = useState(
		localStorage.getItem("todos")
			? JSON.parse(localStorage.getItem("todos"))
			: todos.todos
	)
	const deleteTodo = (id) => {
		setTodo(to_dos.filter((todo) => todo.id !== id))
	}
	const completeTodo = (id) => {
		setTodo(
			to_dos.map((todo) =>
				todo.id === id ? { ...todo, done: !todo.done } : todo
			)
		)
	}
	const onCompleteAll = () => {
		if (to_dos.every((todo) => todo.done)) {
			alert("Has completado todos los todos")
		}
	}
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(to_dos))
	}, [to_dos])

	return (
		<div className="App">
			<TodoCounter to_dos={filter} />
			<TodoSearch setFilter={setFilter} to_dos={to_dos} />
			<TodoList to_dos={to_dos}>
				{filter.length > 0 ? (
					filter.map((todo) => (
						<TodoItem
							todo={todo}
							key={todo.id}
							deleteTodo={deleteTodo}
							completeTodo={completeTodo}
						/>
					))
				) : (
					<NoCoincidences />
				)}
			</TodoList>
			<CreateTodo setTodo={setTodo} />
		</div>
	)
}

export { TodoApp }
