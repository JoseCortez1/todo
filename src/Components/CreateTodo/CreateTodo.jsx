/** @format */

import React, { useContext, useEffect, useState } from "react"
import "./CreateTodo.css"
import add from "../../img/add.svg"
import Modal from "../Modal/Modal"
import { TodoContext } from "../../Context/TodoContext"
import { calculateNewValue } from "@testing-library/user-event/dist/utils"
const CreateTodo = () => {
	const { CreateTodo } = useContext(TodoContext)
	const [newTodo, setNewTodo] = useState("")
	const [open, setOpen] = useState(false)

	const handleCreate = (e) => {
		CreateTodo(newTodo)
		setOpen(false)
		setNewTodo("")
	}
	const CancelCreation = () => {
		setOpen(false)
		setNewTodo("")
	}
	const handleChange = ({ target }) => {
		setNewTodo(target.value)
	}
	return (
		<div className="create_todo">
			<img src={add} className="button_add" onClick={() => setOpen(true)} />
			<Modal open={open}>
				<div className="modal_create">
					<input
						type="text"
						placeholder="New Todo"
						onChange={handleChange}
						value={newTodo}
					/>
					<div className="buttons">
						<button className="cancel" onClick={CancelCreation}>
							Cancel
						</button>
						<button onClick={handleCreate} className="confirm">
							Create
						</button>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default CreateTodo
