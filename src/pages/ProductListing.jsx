import { useState, useEffect, useMemo } from "react";


function ProductList() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue]=useState("");
    useEffect(() => {
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
    }, []);


let filteredProducts = useMemo(()=>{
      return  products.filter(function (p) {
    if(selectedValue!==""){
        return p.category===selectedValue;
    }else{
       return p; 
    }
    return p.category==="furniture";
}).map(function (p) {
    return p;
})
},  [products, selectedValue])
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
    return (
        <>
        <div className="select-wrap">
            <select onChange={(e)=>{
                setSelectedValue(e.target.value);
            }}>
                <option value="">All Categories</option>
                {uniqueCategories.map(u=>{
                    return <option key={u} value={u}>{u}</option>
                })
                }
            </select>
        </div>
        <div className="product-wrap">
            {
                filteredProducts.map(p => {
                    return (
                        <div className="product" key={p.id}>
                            <img src={p.thumbnail} alt={p.title} />
                            <h3>{p.title}</h3>
                            <h4>{p.price}</h4>
                            <div className="tooltip">
                                <span className="tooltiptext">{p.description}</span>
                            </div>
                        </div>
                        
                    )
                })
            }


        </div>
        </>
    )
}

export default ProductList;