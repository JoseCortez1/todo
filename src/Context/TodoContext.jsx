/** @format */

import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../CustomHooks/useLocalStorage"

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
	const [filter, setFilter] = useState([])
	const [to_dos, setTodo] = useLocalStorage("todos", [])

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
	const CreateTodo = (newTodo) => {
		setTodo([
			...to_dos,
			{ description: newTodo, id: to_dos.length + 1, done: false },
		])
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
		<TodoContext.Provider
			value={{
				filter,
				setFilter,
				deleteTodo,
				completeTodo,
				CreateTodo,
				to_dos,
				setTodo,
			}}>
			{children}
		</TodoContext.Provider>
	)
}
export { TodoProvider, TodoContext }
