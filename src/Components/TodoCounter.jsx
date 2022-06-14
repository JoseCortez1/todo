/** @format */

import React from "react"
import "./TodoCounter.css"
const TodoCounter = ({ to_dos }) => {
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
