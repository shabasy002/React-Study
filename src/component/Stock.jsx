import { useState } from "react";

function Stock() {
  const products = {
    chocolate: 2,
    biscut: 7,
    fruits: 0,
  };

  return (
    <ul className="stock">
      {Object.entries(products).map(([name, quantity]) => (
        <li key={name}>
          {name} :{" "}
          {quantity > 0 ? (
            <span style={{ color: "green" }}>In Stock ✅</span>
          ) : (
            <span style={{ color: "red" }}>Out of Stock ❌</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Stock;
