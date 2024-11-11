import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";
import calculateWinner from "./utils/calculateWinner";

export default function Board() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isXNext, setIsXNest] = useState(true);

	function handleClick(index) {
		if (calculateWinner(squares) !== null || squares[index] !== null) {
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
			if (result === "Draw") {
				stautsMessage = "It is Draw!";
			} else {
				stautsMessage = `The Winner Is: ${result}!`;
			}
		} else {
			stautsMessage = `It is ${isXNext ? "X" : "O"}'s turn`;
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

	function handleReset() {
		setSquares(Array(9).fill(null));
		setIsXNest(true);
	}

	return (
		<div>
			<h1>Tic Tac Toe 02</h1>
			<div className='row status'>{status}</div>
			<div className='row'>
				<button
					className='restart-button'
					onClick={handleReset}
				>
					Restart
				</button>
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
