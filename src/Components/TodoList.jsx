/** @format */

import React from "react"
import NoCoincidences from "./NoCoincidences"
import "./TodoList.css"
const TodoList = ({ to_dos, children }) => {
	return (
		<div className="todo_list">
			{to_dos.length > 0 ? (
				children
			) : (
				<NoCoincidences text="Agrega un To do para empezar" />
			)}
		</div>
	)
}

export default TodoList
