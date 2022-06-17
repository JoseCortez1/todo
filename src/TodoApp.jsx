/** @format */

import { useContext, useEffect, useState } from "react"
import "./App.css"
import CreateTodo from "./Components/CreateTodo/CreateTodo"
import NoCoincidences from "./Components/NoCoincidence/NoCoincidences"
import TodoCounter from "./Components/TodoCounter/TodoCounter"
import TodoItem from "./Components/TodoItem/TodoItem"
import TodoList from "./Components/TodoList/TodoList"
import TodoSearch from "./Components/TodoSearch/TodoSearch"
import { TodoContext } from "./Context/TodoContext"

const TodoApp = () => {
	const { filter } = useContext(TodoContext)
	return (
		<div className="App">
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{filter.length > 0 ? (
					filter.map((todo) => <TodoItem todo={todo} key={todo.id} />)
				) : (
					<NoCoincidences />
				)}
			</TodoList>
			<CreateTodo />
		</div>
	)
}

export { TodoApp }
