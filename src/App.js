import { useState } from 'react';

// value is considered a prop if it will be passed to a component , uses curly

function Square() {
  const [value, setValue] = useState(null);
  
  function handleClick() { // nested definition of a function
      setValue("X");
    }

    return (
      <button
        className="square"
        onClick={handleClick} // mapping happens here, onClick is the hook
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

  // you’ll give each square a number to make sure you know where each square is displayed
  // The CSS defined in styles.css styles the divs with the className of board-row.
  return (
      <>
<div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      </>
    );
}

