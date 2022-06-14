/** @format */

import React, { useState } from "react"
import "./TodoItem.css"
const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
	const [check, setCheck] = useState(false)
	const handleChange = () => {
		setCheck(!check)
		completeTodo(todo.id)
	}
	return (
		<div className="todo_item" key={todo.id}>
			<span onClick={() => deleteTodo(todo.id)}>close</span>
			<div className="card">
				<div className="check-mark">
					<span onClick={handleChange}>check</span>
					<input
						type="checkbox"
						checked={todo.done}
						onChange={() => setCheck(check)}
					/>
				</div>
				<p>{todo.description}</p>
			</div>
		</div>
	)
}

export default TodoItem
