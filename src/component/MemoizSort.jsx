import { useState, useMemo } from "react";

function SortProducts() {
  const [sortKey, setSortKey] = useState("title");

  const products = [
    { id: 1, title: "MacBook Pro", price: 2000 },
    { id: 2, title: "iPhone", price: 999 },
    { id: 3, title: "Android", price: 1999 },
    { id: 4, title: "AirPods", price: 299 }
  ];

  // ✅ Memoize sorted list based on sortKey
  const sortedProducts = useMemo(() => {
    console.log("Sorting products...");
    return [...products].sort((a, b) => {
      if (sortKey === "price") return a.price - b.price;
      return a.title.localeCompare(b.title);
    });
  }, [sortKey, products]);

  return (
    <div>
      <h2>Sort Products</h2>
      <select onChange={(e) => setSortKey(e.target.value)} value={sortKey}>
        <option value="title">Sort by Title</option>
        <option value="price">Sort by Price</option>
      </select>

      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortProducts;
