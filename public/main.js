'use strict'

const socket = io()

socket.on('connect', () => console.log(`Socket connected: ${socket.id}`))
socket.on('disconnect', () => console.log(`Socket disconnected: ${socket.id}`))

const boardState = [
	['','',''],
	['','',''],
	['','','']
]

let nextPlayer = 'X'

const drawBoard = (boardtate) => {
	document.querySelector('.board').innerHTML = `
		<table>
			<tr>
				<td>${boardState[0][0]}</td>
				<td>${boardState[0][1]}</td>
				<td>${boardState[0][2]}</td>
			</tr>
			<tr>
				<td>${boardState[1][0]}</td>
				<td>${boardState[1][1]}</td>
				<td>${boardState[1][2]}</td>
			</tr>
			<tr>
				<td>${boardState[2][0]}</td>
				<td>${boardState[2][1]}</td>
				<td>${boardState[2][2]}</td>
			</tr>
	`
}

drawBoard(boardState)


const	board = document.querySelector('.board')
const status = document.querySelector('.status')

board.addEventListener('click', evt => {
	// console.dir(evt.target);
	const col = evt.target.cellIndex;
	const row = evt.target.parentElement.rowIndex;

	if (boardState[row][col]) {
		return console.log("nope, not there");
	}

	boardState[row][col] = nextPlayer;
	// evt.target.innerText = "O"
	drawBoard(boardState)
	nextPlayer = nextPlayer === 'X' ? 'O' : 'X'
	status.innerText = `${nextPlayer}'s turn`

	console.log("clicked on: ", row, col);
	console.log("board: ", board);

})

