import React, { useContext } from "react";
import { v4 } from "uuid";

import ChessPiece from "../ChessPiece/ChessPiece.js";
import gameContext from "../../context/gameContext";

import "./ChessTable.css";

const ChessTable = () => {
  const context = useContext(gameContext);
  const { matrix, selectedPiece, movePiece } = context;

  const handleTaleClick = (x, y) => {
    return () => {
      // if there is no selected piece dont do anything
      if (!selectedPiece.length) {
        return;
      }

      // if there is a selected piece move it to the selected tale
      movePiece(x, y);
    };
  };

  return (
    <div className="chess-table">
      {context.matrix.map((row, rowIndex) => {
        return row.map((piece, pieceIndex) => {
          /* if the index of the moving piece has the same parity as the index of the line then the tale is light else it is dark */
          const parity = pieceIndex % 2 === rowIndex % 2;
          return (
            <div
              key={v4()}
              className={`chess-square--${parity ? "light" : "dark"}`}
              onClick={handleTaleClick(rowIndex, pieceIndex)}
            >
              <ChessPiece pieceId={piece} x={rowIndex} y={pieceIndex} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default ChessTable;
