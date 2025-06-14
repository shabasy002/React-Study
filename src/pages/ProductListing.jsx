import { useState, useEffect, useMemo, useRef, useCallback } from "react";


function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue]=useState("");
    const [sortingFactor, setSortingFactor]=useState("");
    const [searchText, setSearchText] = useState("");
    const searchbox=useRef("");

    useEffect(() => {
         const storedCategory = localStorage.getItem('selectedValue');
    const storedSort = localStorage.getItem('sortingFactor');

    if (storedCategory) {
        setSelectedValue(storedCategory);
    } 
    if (storedSort) {
        setSortingFactor(storedSort);
    }

        fetch("https://dummyjson.com/products")
            .then(function (res) {
                return res.json();
            })
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
            searchbox.current.focus();
    }, []);


const filteredProducts = useMemo(() => {
  let filtered = [...products];

  // 1. Filter by category
  if (selectedValue) {
    filtered = filtered.filter(p => p.category === selectedValue);
  }

  // 2. Filter by search text
  if (searchText.trim()) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // 3. Sort by rating or price
  if (sortingFactor) {
    filtered.sort((a, b) => b[sortingFactor] - a[sortingFactor]);
  }

  return filtered;
}, [products, selectedValue, searchText, sortingFactor]);


let categories=useMemo(()=>{
    return products.map(function(p){
    return p.category
    }, [products]);
})
let uniqueCategories=useMemo(()=>{
   return categories.filter((item, index, array) => {
    return array.indexOf(item) === index;
});
}, [categories])



function handleSearch(e) {
  debouncedSearch(e.target.value);
}


function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedSearch = useMemo(() => {
  return debounce((value) => {
    setSearchText(value.toLowerCase());
  }, 500); // adjust delay as needed
}, []);
//const matchesSearch = searchText ? p.title.toLowerCase().includes(searchText) : true;
//console.log(localStorage.getItem('sortingFactor'));

    return (
        <>
        <div className="filter-wrap">
             <div className="select-wrap">
            <select value={selectedValue} onChange={(e)=>{
                const value=e.target.value;
                  setSelectedValue(value);
                localStorage.setItem('selectedValue', value);
            }}>
                <option value="">All Categories</option>
                {uniqueCategories.map(u=>{
                    return <option key={u} value={u}>
                        {u}
                    </option>
                })
                }
            </select>
        </div>
        <div className="select-wrap">
            <select value={sortingFactor} onChange={(e)=>{
                  const sortvalue = e.target.value;
                    setSortingFactor(sortvalue);
                localStorage.setItem('sortingFactor', sortvalue);
            }}>
                <option value="">Sort</option>
                <option value="rating">Rating - high to low</option>
                 <option value="price">Price - high to low</option>
            </select>
            
        </div>
         <div className="select-wrap">
            <input  ref={searchbox} onChange={(e)=>{
                handleSearch(e)
            }} type="text"  placeholder="search.." name="search" id="search"/>
         </div>
        </div>
       
        <div className="product-wrap">
            {filteredProducts.length>0 &&
                filteredProducts.map(p => {
                    return (
                        <div className="product" key={p.id}>
                            <h5>Rating:{p.rating}</h5>
                            <img src={p.thumbnail} alt={p.title} />
                            <h3>{p.title}</h3>
                            <h4>Price:{p.price}</h4>
                            <div className="tooltip">
                                <span className="tooltiptext">{p.description}</span>
                            </div>
                        </div>
                        
                    )
                })
            }{filteredProducts.length < 1 &&
                <p>No items found..!</p>
            }


        </div>
        </>
    )
}

export default ProductList;