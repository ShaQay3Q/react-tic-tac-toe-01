export default function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[2, 4, 6],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
	];
	const l = lines.length;
	for (let i = 0; i < l; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] !== null &&
			squares[a] === squares[b] &&
			squares[b] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}
