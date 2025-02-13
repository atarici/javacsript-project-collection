// define squares as an array
const allSquares = Array.from(document.querySelectorAll('.square'))

const footer = document.querySelector('.footer')

footer.textContent = 'X goes first.'

turn = 'X'

// adding a click event to all squares
allSquares.forEach((square) => {
  square.addEventListener('click', () => appendCrossOrCircle(square));
});

const appendCrossOrCircle = (square) => {

	// if clicked square is not empty, then do nothing
	if (square.textContent !== '') return

	square.textContent = turn

	if (turn === 'X') {
    turn = 'O';
    footer.textContent = `${turn}'s turn.`
    square.classList.add('red')    
  } else {
    turn = 'X';
    footer.textContent = `${turn}'s turn.`
    square.classList.add('blue')
  }

  checkWin() // check win after every move
}

const checkWin = () =>  {

	const winningCombinations = [
		[0,1,2], // rows
		[3,4,5],
		[6,7,8],
		[0,3,6], // columns
		[1,4,7],
		[2,5,8],
		[0,4,8], // cross
		[2,4,6]
		// Since I defined all the squares as an array and the index starts from 0, 1 is missing in the numbers.
	]

	for(const combination of winningCombinations) {
		const [a, b, c] = combination

		if(
			allSquares[a].textContent && // if square is not empty
			allSquares[a].textContent === allSquares[b].textContent &&
			allSquares[a].textContent === allSquares[c].textContent
		) {

			combination.forEach((e) => {
				allSquares[e].classList.add('win')
			})

			footer.textContent = `${allSquares[a].textContent} won.`
			finishGame()
			return
		}
	}

	if(allSquares.every((square) => square.textContent !== '')) {

		allSquares.forEach((square) => square.classList.add('draw'))
		footer.textContent = "It's a draw."
		finishGame()
	}
}

const finishGame = () => {

	allSquares.forEach((square) => square.removeEventListener('click', appendCrossOrCircle))

	allSquares.forEach((square) => square.addEventListener('click', resetGame))
}

const resetGame = () => {

	allSquares.forEach((square) => {
		square.textContent = ''
		square.classList.remove('red')
		square.classList.remove('blue')
		square.classList.remove('win')
		square.classList.remove('draw')
		square.removeEventListener('click', resetGame) // remove reset event
		square.addEventListener('click', () => appendCrossOrCircle(square)) // adding click event again
	})

	// reset everything to default
	turn = 'X'
	footer.textContent = `${turn} goes first.`
}