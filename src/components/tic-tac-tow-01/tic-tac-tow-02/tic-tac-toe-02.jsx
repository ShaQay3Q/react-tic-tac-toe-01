import React from "react";
import "./tic-tac-toe-02.css";
import Board from "./Board";

export default function TicTacToe02() {
	return (
		<div>
			<h1>Tic Tac Toe 02</h1>
			<div className='row'>Status</div>
			<div className='row'>
				<button className='restart-button'>Restart</button>
			</div>
			<Board />
		</div>
	);
}
