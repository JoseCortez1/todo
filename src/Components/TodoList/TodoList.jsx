/** @format */

import React, { useContext } from "react"
import { TodoContext } from "../../Context/TodoContext"
import NoCoincidences from "../NoCoincidence/NoCoincidences"
import "./TodoList.css"
const TodoList = ({ children }) => {
	const { to_dos } = useContext(TodoContext)
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
