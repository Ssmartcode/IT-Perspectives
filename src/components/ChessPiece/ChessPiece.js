import React from "react";
import "./ChessPiece.css";
import mapImages from "./mapImages";

const ChessPiece = (props) => {
  if (!props.pieceId) return null;
  return (
    <div className="chess-piece">
      <img src={mapImages[props.pieceId]} alt="chess piece" />
    </div>
  );
};

export default ChessPiece;
