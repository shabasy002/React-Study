import React from "react";
import { useState, useEffect } from "react";

function Withcounter(WrappedComponent){
    return function EnhancedComponent(props){
        
        const [count, setCount]=useState(0)
        function increment(){
        setCount(count+1);
        return count;
    }       
        return (
            <>
        
        <WrappedComponent {...props} count={count} increment={()=>{increment(count)}} />
        </>
        )
    }
}
export default Withcounter;