import React, { useCallback, useState } from "react";

import initialMatrix from "./utils/matrix.js";
import isColliding from "./utils/isColliding.js";
import GameContext from "./context/gameContext";

import ChessTable from "./components/ChessTable/ChessTable";
import "./App.css";
import RestartGame from "./components/RestartGame/RestartGame.js";

function App() {
  const [selectedPiece, setSelectedPiece] = useState([]); //coords of selected chess piece
  const [matrix, setMatrix] = useState(initialMatrix); //matrix of the chess table

  const selectPiece = useCallback((piecePositon) => {
    // here we store thee coordontaes of the chess piece that has been clicked
    setSelectedPiece(piecePositon);
  }, []);

  // x and y represents the coords of the selected tale
  const movePiece = useCallback(
    (x, y) => {
      // get the coords of the currently selected piece
      const [selectedX, selectedY] = selectedPiece;

      // check if user tries to replace two pieces of same color
      if (typeof matrix[x][y] === typeof matrix[selectedX][selectedY]) {
        return;
      }

      // check if the pawns are colliding
      if (isColliding(matrix, selectedPiece, [x, y])) {
        return;
      }

      // map through the matrix and generate a new one
      const newMatrix = matrix.map((row, rowIndex) => {
        return row.map((item, colIndex) => {
          //this is the position  of the tale the user has just clicked on
          if ((rowIndex === x) & (colIndex === y)) {
            // move the selected piece(chess piece) on the the tale that the user has selected
            return matrix[selectedX][selectedY];
          }

          // remove the selected piece (that has just been moved) from it's previous position
          if (rowIndex === selectedX && colIndex === selectedY) {
            // i set an empty array to the selectedPiece because there is no selected piece after we move it
            setSelectedPiece([]);
            return null;
          }

          return item;
        });
      });

      // update the matrix and rerender it on the screen
      setMatrix(newMatrix);
    },
    [matrix, selectedPiece]
  );

  return (
    <React.Fragment>
      <GameContext.Provider
        value={{ selectedPiece, matrix, selectPiece, movePiece }}
      >
        <div className="container">
          <RestartGame />
          <ChessTable />
        </div>
      </GameContext.Provider>
    </React.Fragment>
  );
}

export default App;
