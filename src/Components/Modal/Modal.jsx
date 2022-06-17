/** @format */

import { useEffect } from "react"
import { createPortal } from "react-dom"
import "./Modal.css"
const Modal = ({ children, open }) => {
	useEffect(() => {
		const modal = document.getElementById("modal")
		if (open) {
			modal.classList.remove("close")
			modal.classList.add("open")
		} else {
			modal.classList.remove("open")
			modal.classList.add("close")
		}
	}, [open])
	return createPortal(children, document.getElementById("modal"))
}

export default Modal
