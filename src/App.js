function Square({value}) { // value is considered a prop as it will be passed 
  return <button className="square">{value}</button>; // {} are relevant
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
          <Square value="1" />
          <Square value="2" />
          <Square value="3" />
        </div>
        <div className="board-row">
          <Square value="4" />
          <Square value="5" />
          <Square value="6" />
        </div>
        <div className="board-row">
          <Square value="7" />
          <Square value="8" />
          <Square value="9" />
        </div>
      </>
    );
}

