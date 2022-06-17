/** @format */

import React, { useContext, useEffect, useState } from "react"
import { TodoContext } from "../../Context/TodoContext"
import "./TodoSearch.css"
const TodoSearch = () => {
	const { setFilter, to_dos } = useContext(TodoContext)
	const [search, setSearch] = useState("")
	useEffect(() => {
		setFilter(to_dos)
	}, [to_dos])
	const handleChange = (e) => {
		setSearch(e.target.value)
		if (e.target.value === "") {
			setFilter(to_dos)
		} else {
			setFilter(
				to_dos.filter((todo) =>
					todo.description.toLowerCase().includes(e.target.value.toLowerCase())
				)
			)
		}
	}

	return (
		<div className="todo_search">
			<input
				type="text"
				placeholder="Todos a buscar"
				value={search}
				onChange={handleChange}
			/>
		</div>
	)
}

export default TodoSearch
