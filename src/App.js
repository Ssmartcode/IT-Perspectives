import "./App.css";
import React, { useCallback, useState } from "react";
import ChessTable from "./components/ChessTable/ChessTable";
import initialMatrix from "./matrix.js";
import GameContext from "./context/gameContext";

function App() {
  const [selectedPiece, setSelectedPiece] = useState([]);
  const [matrix, setMatrix] = useState(initialMatrix);

  const selectPiece = useCallback((piecePositon) => {
    setSelectedPiece(piecePositon);
  }, []);

  // x and y represents the coords of the selected tale
  const movePiece = useCallback((x, y) => {
    console.log("move it");

    const newMatrix = matrix.map((row, rowIndex) => {
      return row.map((item, colIndex) => {
        // get the coords of the currently selected piece
        const [selectedX, selectedY] = selectedPiece;

        // if we are on the currently selected tale, move the currently selected piece on this tale
        if ((rowIndex === x) & (colIndex === y)) {
          console.log(matrix[selectedX][selectedY]);
          return matrix[selectedX][selectedY];
        }

        // remove the selected tale from it's previous position
        if (rowIndex === selectedX && colIndex === selectedY) {
          setSelectedPiece([]);
          return 0;
        }

        return item;
      });
    });
    console.log(newMatrix);

    setMatrix(newMatrix);
  });

  return (
    <React.Fragment>
      <GameContext.Provider
        value={{ selectedPiece, matrix, selectPiece, movePiece }}
      >
        <ChessTable></ChessTable>
      </GameContext.Provider>
    </React.Fragment>
  );
}

export default App;
