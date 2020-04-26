import React from "react";
import "./card.css";

function Card({ image }) {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt="imag"
          style={{
            maxWidth: "200px",
            borderRadius: '10px'
          }}
        />
      </div>
    </>
  );
}
export default Card;
