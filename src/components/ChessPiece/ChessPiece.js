import React, { useContext, useEffect, useState } from "react";

import mapImages from "./mapImages";
import GameContext from "../../context/gameContext";

import "./ChessPiece.css";

const ChessPiece = (props) => {
  const { x, y } = props;
  const [selected, setSelected] = useState(false);

  const gameContext = useContext(GameContext);
  const { selectedPiece, playerTurn, matrix, selectPiece } = gameContext;

  const handlePieceSelect = () => {
    const [selectedX, selectedY] = selectedPiece;

    // check if the piece we are about to select belongs to the current player
    if (typeof matrix[x][y] === "string" && playerTurn === 1) return;
    if (typeof matrix[x][y] === "number" && playerTurn === 2) return;

    if (selectedX === x && selectedY === y) {
      // if user clicks on same piece twice i will deselect it
      selectPiece([]);
    } else {
      selectPiece([x, y]);
    }
  };

  useEffect(() => {
    const [selectedX, selectedY] = selectedPiece;
    // check if the selected piece on the table is the same with this piece
    // by comparing the x and y coordonates
    if (selectedX === x && selectedY === y) {
      setSelected(true);
    }
  }, [selectedPiece, x, y]);

  // if no pieceId given return nothing
  if (!props.pieceId) return null;

  return (
    <div
      className={`chess-piece ${selected ? "chess-piece--selected" : null}`}
      onClick={handlePieceSelect}
    >
      <img src={mapImages[props.pieceId]} alt="chess piece" />
    </div>
  );
};

export default ChessPiece;
