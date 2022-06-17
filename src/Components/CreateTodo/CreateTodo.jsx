/** @format */

import React, { useContext, useState } from "react"
import "./CreateTodo.css"
import add from "../../img/add.svg"
import Modal from "../Modal/Modal"
import { TodoContext } from "../../Context/TodoContext"
const CreateTodo = () => {
	const { CreateTodo } = useContext(TodoContext)
	const [newTodo, setNewTodo] = useState("")
	const [open, setOpen] = useState(false)

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
					<button onClick={() => CreateTodo(newTodo, setNewTodo, setOpen)}>
						Create
					</button>
				</div>
			</Modal>
		</div>
	)
}

export default CreateTodo
