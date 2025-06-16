import { useState } from "react";
import useCounter from "../custom-hooks/UseCounter";
import useArray from "../custom-hooks/UseArray";

function Counter(){
    //const[count, setCount]=useState(0);
     const { count, increment, decrement, reset } = useCounter(0);
  const { arr: tags, add, remove, clear } = useArray(["react"]);

    return(
        <div className="counter-wrap">
            <h1 className={count >  10 ? "highlight" : ""}>{count}</h1>
            <button href="javascript:;" className="add" onClick={increment}>Add</button>
            <button href="#" className="reset" disabled={count <= 0} onClick={reset }>Reset</button>
            <button  className="minus" disabled={count <= 0} onClick={decrement} >Minus</button>
        
            <button onClick={() => add("hooks")}>Add "hooks"</button>
      <button onClick={() => remove("react")}>Remove "react"</button>
      <button onClick={clear}>Clear All</button>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
        
        </div>

        
    )
}

export default Counter;