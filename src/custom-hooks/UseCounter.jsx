import React from "react";
import { useState } from "react";

function useCounter(initalValue=0){
    const [count, setCount]=useState(initalValue);
    function increment(){
        return setCount ((count)=>count+1);
    }
     function decrement(){
        return setCount ((count)=>count-1);
    }

    function reset(){
        return setCount(0);
    }

    return {count, increment, decrement, reset}
}

export default useCounter;