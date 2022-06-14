/** @format */

import { useEffect, useState } from "react"
import "./App.css"

import CreateTodo from "./Components/CreateTodo"
import NoCoincidences from "./Components/NoCoincidences"
import TodoCounter from "./Components/TodoCounter"
import TodoItem from "./Components/TodoItem"
import TodoList from "./Components/TodoList"
import TodoSearch from "./Components/TodoSearch"
const TodoApp = () => {
	const [filter, setFilter] = useState([])
	const [to_dos, setTodo] = useState([
		{
			id: 1,
			description: "Learn React",
			done: false,
		},
		{
			id: 2,
			description: "Learn Redux",
			done: false,
		},
		{
			id: 3,
			description: "Learn React Native",
			done: true,
		},
	])
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

	useEffect(() => {
		console.log(filter)
	}, [filter])

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
