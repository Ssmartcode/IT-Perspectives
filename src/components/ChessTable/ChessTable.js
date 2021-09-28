import React, { useState } from "react";
import initialMatrix from "./matrix.js";
import { v4 } from "uuid";
import "./ChessTable.css";
import ChessPiece from "../ChessPiece/ChessPiece.js";

const ChessTable = () => {
  const [matrix, setMatrix] = useState(initialMatrix);
  return (
    <div className="chess-table">
      {matrix.map((row, rowIndex) => {
        return row.map((piece, pieceIndex) => {
          {
            /* if the index of the moving piece has the same parity as the index of the line then the tale is light else it is dark */
          }
          const parity = pieceIndex % 2 === rowIndex % 2;
          return (
            <div
              key={v4()}
              className={`chess-square--${parity ? "light" : "dark"}`}
            >
              <ChessPiece pieceId={matrix[rowIndex][pieceIndex]} />
            </div>
          );
        });
      })}
    </div>
  );
};

export default ChessTable;
