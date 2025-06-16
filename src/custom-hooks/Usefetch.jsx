import React from "react";
import { useState, useEffect } from "react";

function usefetch(url){
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);
    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function (data){
             setData(data);
             setLoading(false);
        })
      .catch(function(error){
       setError(error);
       console.error("Error fetching products:", error);
      })
        .finally(function(){
            return setLoading(false)
        });
    }, [url])
    return {data, loading , error};
}

export default usefetch;