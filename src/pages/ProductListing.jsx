import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import usefetch from "../custom-hooks/Usefetch";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [sortingFactor, setSortingFactor] = useState("");
  const [searchText, setSearchText] = useState("");
  const searchbox = useRef("");

  const { data, loading, error } = usefetch("https://dummyjson.com/products");

  useEffect(() => {
    if (data?.products) {
      setProducts(data.products); // set products when ready
    }
  }, [data]);

  useEffect(() => {
    const storedCategory = localStorage.getItem("selectedValue");
    const storedSort = localStorage.getItem("sortingFactor");

    if (storedCategory) {
      setSelectedValue(storedCategory);
    }
    if (storedSort) {
      setSortingFactor(storedSort);
    }

    searchbox.current.focus();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedValue) {
      filtered = filtered.filter((p) => p.category === selectedValue);
    }

    if (searchText.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (sortingFactor) {
      filtered.sort((a, b) => b[sortingFactor] - a[sortingFactor]);
    }

    return filtered;
  }, [products, selectedValue, searchText, sortingFactor]);

  const categories = useMemo(() => {
    return products.map((p) => p.category);
  }, [products]);

  const uniqueCategories = useMemo(() => {
    return categories.filter((item, index, array) => {
      return array.indexOf(item) === index;
    });
  }, [categories]);

  // ✅ Debounce implementation using useCallback + useRef
  const timeoutRef = useRef(null);

  const debouncedSearch = useCallback((value) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchText(value.toLowerCase());
    }, 500);
  }, []);

  function handleSearch(e) {
    debouncedSearch(e.target.value);
  }

  return (
    <>
      <div className="filter-wrap">
        <div className="select-wrap">
          <select
            value={selectedValue}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedValue(value);
              localStorage.setItem("selectedValue", value);
            }}
          >
            <option value="">All Categories</option>
            {uniqueCategories.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
        <div className="select-wrap">
          <select
            value={sortingFactor}
            onChange={(e) => {
              const sortvalue = e.target.value;
              setSortingFactor(sortvalue);
              localStorage.setItem("sortingFactor", sortvalue);
            }}
          >
            <option value="">Sort</option>
            <option value="rating">Rating - high to low</option>
            <option value="price">Price - high to low</option>
          </select>
        </div>
        <div className="select-wrap">
          <input
            ref={searchbox}
            onChange={handleSearch}
            type="text"
            placeholder="search.."
            name="search"
            id="search"
          />
        </div>
      </div>

      <div className="product-wrap">
        {filteredProducts.length > 0 &&
          filteredProducts.map((p) => (
            <div className="product" key={p.id}>
              <h5>Rating: {p.rating}</h5>
              <Link to={`/productDetail/${p.id}`}>
                <img src={p.thumbnail} alt={p.title} loading="lazy"/>
              </Link>
             
              <h3>{p.title}</h3>
              <h4>Price: {p.price}</h4>
              <div className="tooltip">
                <span className="tooltiptext">{p.description}</span>
              </div>
            </div>
          ))}

        {filteredProducts.length < 1 && <p>No items found..!</p>}
      </div>
    </>
  );
}

export default ProductList;
