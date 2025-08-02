import { useState } from 'react';

// Square is now a controlled component: it receives `value` and `onSquareClick` from the parent via props
function Square({ value, onSquareClick }) {
  // value is considered a prop if it will be passed to a component , uses curly
  return (
    <button
      className="square"
      onClick={onSquareClick} // mapping happens here, onClick is the hook
    >
      {value}
    </button>
  );
}

// export: makes this component available for import in other files
// default: this is the default export of the file, so it can be imported without braces
// return statement uses JSX: syntax extension that looks like HTML but compiles to React.createElement

export default function Board() {
  // className is used instead of "class" because we're writing JSX (not HTML)
  // "square" refers to a CSS class, used for styling this component

  // The CSS defined in styles.css styles the divs with the className of board-row.

  // Hooks, dinamically tracked on change
  const [xIsNext, setXIsNext] = useState(true); // keeps track of whose turn it is
  const [squares, setSquares] = useState(Array(9).fill(null)); // Follows the concept of storing children data

  // When clicking on a Square, the child Square component now asks the parent Board component to update the state of the board. 
  // replacing > mutating states, since react always re renders everything anyways
  function handleClick(i) {
    // If there's already a winner or the square is already filled, do nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Copy the current squares array instead of mutating
    const nextSquares = squares.slice();

    // Fill the square with either 'X' or 'O' depending on whose turn it is
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    // Update state
    setSquares(nextSquares);
    setXIsNext(!xIsNext); // Toggle player
  }

  // Game status message logic
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  // Init a set of squares with data that we know
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// calculateWinner inspects all possible winning line combinations
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal from top-left
    [2, 4, 6], // diagonal from top-right
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return 'X' or 'O' if found
    }
  }
  return null; // No winner
}