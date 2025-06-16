import React from "react";
import { useState, useEffect } from "react";
import Withcounter from "../HigherOrder/WithCounter";
function HoverCounter(props){
  const {count, increment}=props;
    return(
        <>
         <button onMouseOver={increment}>Counter Hover</button>
        <p>{count}</p>
        </>
       
    )
}
export default HoverCounter;
export const WithHoverCounter=Withcounter(HoverCounter);