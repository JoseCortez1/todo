/** @format */

import React, { useContext } from "react"
import { TodoContext } from "../../Context/TodoContext"
import "./TodoCounter.css"
const TodoCounter = () => {
	const { to_dos } = useContext(TodoContext)

	const getNotDone = () => {
		return ` ${to_dos.filter((todo) => todo.done).length} `
	}
	return (
		<div className="todo_counter">
			Todos
			<span> {getNotDone()} </span>
			de {to_dos.length}
		</div>
	)
}

export default TodoCounter
