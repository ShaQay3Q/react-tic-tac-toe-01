import React from "react";
import "./Square.css";

export default function Square({ value }) {
	return <button className='square'>{value}</button>;
}
