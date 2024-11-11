import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNest] = useState(true);

	function handleClick(index) {
		squares[index] = isXNext ? "X" : "O";

		setSquares(squares);
		setIsXNest(!isXNext);
	}

	function renderSquare(index) {
		return (
			<Square
				value={squares[index]}
				onClick={() => handleClick(index)}
			/>
		);
	}

	return (
		<div className='board'>
			<div className='board-row'>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</div>
			<div className='board-row'>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</div>
			<div className='board-row'>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</div>
		</div>
	);
}
