/** @format */

import React from "react"
import notfound from "../img/icon_not_found.svg"
import "./NoCoincidences.css"
const NoCoincidences = ({ text = "No hay coincidencia en tu busqueda" }) => {
	return (
		<div className="not_coincidences">
			<img src={notfound} />
			<p>{text}</p>
		</div>
	)
}

export default NoCoincidences
