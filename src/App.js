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
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>

      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

