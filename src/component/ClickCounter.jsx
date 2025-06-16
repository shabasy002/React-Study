import React from "react";
import { useState, useEffect } from "react";
import Withcounter from "../HigherOrder/WithCounter";

function ClickCounter(props){
const { count, increment } = props;
    return(
        <>
         <button onClick={increment}>Counter</button>
         <p>{count}</p>
        </>
       
    )
}

export default ClickCounter;
export const WrappedClickCounter = Withcounter(ClickCounter);
