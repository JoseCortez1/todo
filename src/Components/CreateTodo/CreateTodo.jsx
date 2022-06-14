/** @format */

import React, { useState } from "react"
import "./CreateTodo.css"
import add from "../../img/add.svg"
const CreateTodo = ({ setTodo }) => {
	const [newTodo, setNewTodo] = useState("")
	const CreateTodo = () => {
		setTodo((prev) => [
			...prev,
			{ description: newTodo, id: prev.length + 1, done: false },
		])
		setNewTodo("")
	}
	const CancelCreation = () => {
		setNewTodo("")
	}
	return (
		<div className="create_todo">
			<img src={add} className="button_add" />

			<div className="modal_create">
				<input
					type="text"
					placeholder="New Todo"
					onChange={(e) => setNewTodo(e.target.value)}
					value={newTodo}
				/>
				<button onClick={CancelCreation}>Cancel</button>
				<button onClick={CreateTodo}>Create</button>
			</div>
		</div>
	)
}

export default CreateTodo