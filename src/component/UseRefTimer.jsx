import { useRef, useState,useEffect } from "react";

function UseRefTimer() {
    const btnRef=useRef();
    const count=useRef(0);
    function handleClick(){
        count.current=count.current+1;
        console.log(count.current+1);
    }
    useEffect(()=>{
        console.log()
    })
    return(
        <div>
            <h1>{count.current}</h1>
   
            <button className="stop" ref={btnRef} onClick={(e)=>{
                handleClick();
            }}>Start</button>
        </div>
    )
}

export default UseRefTimer;