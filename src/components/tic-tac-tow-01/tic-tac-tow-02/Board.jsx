import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";
import calculateWinner from "./utils/calculateWinner";

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNest] = useState(true);

	function handleClick(index) {
		if (calculateWinner(squares) || squares[index]) {
			return;
		}
		squares[index] = isXNext ? "X" : "O";

		setSquares(squares);
		setIsXNest(!isXNext);
	}

	const resulat = calculateWinner(squares);

	function changeStatus(result) {
		let stautsMessage;
		if (result !== null) {
			stautsMessage = `The Winner Is: ${result}!`;
		} else {
			stautsMessage = isXNext ? "Is is X's turn" : "It is O's turn";
		}
		return stautsMessage;
	}

	const status = changeStatus(resulat);

	function renderSquare(index) {
		return (
			<Square
				value={squares[index]}
				onClick={() => handleClick(index)}
			/>
		);
	}

	return (
		<div>
			<h1>Tic Tac Toe 02</h1>
			<div className='row status'>{status}</div>
			<div className='row'>
				<button className='restart-button'>Restart</button>
			</div>
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
		</div>
	);
}
