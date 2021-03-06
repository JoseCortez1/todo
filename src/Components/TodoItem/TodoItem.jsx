/** @format */

import React, { useContext, useState } from "react"
import "./TodoItem.css"
import closeX from "../../img/X.svg"
import check_mark from "../../img/check_mark.svg"
import { TodoContext } from "../../Context/TodoContext"
const TodoItem = ({ todo }) => {
	const { deleteTodo, completeTodo } = useContext(TodoContext)

	const [check, setCheck] = useState(false)
	const handleChange = () => {
		setCheck(!check)
		completeTodo(todo.id)
	}
	return (
		<div className="todo_item" key={todo.id}>
			<img
				src={closeX}
				className={`closeItem ${!todo.done ? "disabled" : ""}`}
				onClick={todo.done ? () => deleteTodo(todo.id) : null}
			/>

			<div className="card">
				<div className="check-mark">
					<img
						src={check_mark}
						onClick={handleChange}
						alt="check-mark"
						className={`check_mark ${!todo.done ? "disabled" : ""}`}
					/>

					<input
						type="checkbox"
						checked={todo.done}
						onChange={() => setCheck(check)}
					/>
				</div>
				<p className={`${todo.done ? "completed" : ""}`}>{todo.description}</p>
			</div>
		</div>
	)
}

export default TodoItem
