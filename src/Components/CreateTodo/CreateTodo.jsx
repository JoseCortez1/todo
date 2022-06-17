/** @format */

import React, { useState } from "react"
import "./CreateTodo.css"
import add from "../../img/add.svg"
import Modal from "../Modal/Modal"
const CreateTodo = ({ setTodo }) => {
	const [newTodo, setNewTodo] = useState("")
	const [open, setOpen] = useState(false)
	const CreateTodo = () => {
		setTodo((prev) => [
			...prev,
			{ description: newTodo, id: prev.length + 1, done: false },
		])
		setNewTodo("")
		setOpen(false)
	}
	const CancelCreation = () => {
		setOpen(false)
		setNewTodo("")
	}
	return (
		<div className="create_todo">
			<img src={add} className="button_add" onClick={() => setOpen(true)} />
			<Modal open={open}>
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
			</Modal>
		</div>
	)
}

export default CreateTodo
