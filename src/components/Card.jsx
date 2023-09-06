import "./Card.css";
import React from "react";

function Card(props) {
  return (
    <div
      className="cardContent"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="overlaySpan"></div>
      <div className="overlay">
        <span>{props.tittle}</span>
      </div>
    </div>
  );
}

export default Card;
