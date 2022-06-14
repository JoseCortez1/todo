/** @format */

import React, { useState } from "react"
import "./CreateTodo.css"
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
		<>
			<button>+</button>
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
		</>
	)
}

export default CreateTodo
