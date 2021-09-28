import React, { useContext, useEffect, useState } from "react";
import "./ChessPiece.css";
import mapImages from "./mapImages";
import GameContext from "../../context/gameContext";

const ChessPiece = (props) => {
  const { x, y } = props;
  const [selected, setSelected] = useState(false);

  const gameContext = useContext(GameContext);
  const { selectPiece, selectedPiece } = gameContext;

  const handlePieceSelect = () => {
    selectPiece([x, y]);
  };

  useEffect(() => {
    const [selectedX, selectedY] = selectedPiece;
    // check if the selected piece on the table is the same with this piece
    // by comparing the x and y coordonates
    if (selectedX === x && selectedY === y) setSelected(true);
  }, [selectedPiece]);

  // if no piece given return nothing
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
