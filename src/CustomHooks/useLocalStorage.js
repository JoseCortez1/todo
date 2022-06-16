/** @format */

import { useState } from "react"
export const useLocalStorage = (key, initialState) => {
	const itemStorage = localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key))
		: initialState
	const [item, setItem] = useState(itemStorage)

	const setItemToStorage = (value) => {
		setItem(value)
		localStorage.setItem(key, JSON.stringify(value))
	}

	return [item, setItemToStorage]
}
