import { useState } from "react";


function Counter(){
    const[count, setCount]=useState(0);
   
    return(
        <div className="counter-wrap">
            <h1 className={count >  10 ? "highlight" : ""}>{count}</h1>
            <button href="javascript:;" className="add"  onClick={(e) => {
                //document.getElementsByClassName("minus")[0].removeAttribute("disabled", true);
                setCount((count) => count + 1)}}>Add</button>
            <button href="#" className="reset" disabled={count <= 0} onClick={(e) => {setCount(0)
              
            }}>Reset</button>
            <button  className="minus" disabled={count <= 0} onClick={() => setCount((count) => count - 1)} >Minus</button>
        </div>
    )
}

export default Counter;