import React from "react";
import "./TicTacToe.css";
import lemon_icon from "../assets/grape-svgrepo-com.svg";
import peach_icon from "../assets/peach-svgrepo-com.svg";

export default function TicTacToe() {
	return (
		<div className='container'>
			<h1 className='title'>
				Tic Tac Toe Game In <span>React</span>
			</h1>
			<div className='board'>
				<div className='row1'>
					<div className='boxes'></div>
					<div className='boxes'></div>
					<div className='boxes'></div>
				</div>
				<div className='row2'>
					<div className='boxes'></div>
					<div className='boxes'></div>
					<div className='boxes'></div>
				</div>
				<div className='row3'>
					<div className='boxes'></div>
					<div className='boxes'></div>
					<div className='boxes'></div>
				</div>
			</div>
			<button className='reset'>Reset</button>
		</div>
	);
}
