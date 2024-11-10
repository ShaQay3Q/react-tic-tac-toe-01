import React from "react";
import "./Square.css";

export default function Square({ value, onClick }) {
	console.log("function Square");

	return (
		<button
			className='square'
			onClick={onClick}
		>
			{value}
		</button>
	);
}
