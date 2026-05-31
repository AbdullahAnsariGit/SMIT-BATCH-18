import React from "react";

function Card({ items }) {
  const { title = "Dummy Title", desc = "No Desc", price = "Free" } = items;
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{`${price} Pkr`}</p>
    </div>
  );
}

export default Card;
