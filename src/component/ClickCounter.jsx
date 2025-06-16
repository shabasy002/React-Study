import React from "react";
import { useState, useEffect } from "react";
import Withcounter from "../HigherOrder/WithCounter";
import useStep from "../custom-hooks/UseStep";

function ClickCounter(props){
const { count, increment } = props;
const { step, next, prev, reset, isFirst, isLast } = useStep({ initial: 1, max: 4 });

    return(
        <>
         <button onClick={increment}>Counter</button>
         <p>{count}</p>

           <h2>Current Step: {step}</h2>
            <button onClick={prev} disabled={isFirst}>Previous</button>
            <button onClick={next} disabled={isLast}>Next</button>
            <button onClick={reset}>Reset</button>
        </>
       
    )
}

export default ClickCounter;
export const WrappedClickCounter = Withcounter(ClickCounter);
