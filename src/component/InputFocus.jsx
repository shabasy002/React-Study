import { useRef, useState, useEffect, use } from "react";

function InputFocus(){
      const inputRef = useRef(); // ✅ create the ref here
      const buttonRef=useRef();
      const anotherBut=useRef();
      const count=useRef(0);
      const anotherCount=useRef(0);
    useEffect(() => {
        inputRef.current.focus();
        }, []);
    return(
           <>
         <label>Text</label>
       
         <input type="text" className="text" ref={inputRef} />
         <button ref={anotherBut}  className="btn" onClick={(e)=>{
            buttonRef.current.click();
          
         }}>Actual click</button>
         <button className="button" ref={buttonRef} onClick={(e)=>{
            alert("I am triggred!")
            count.current=(count.current)+1;
            console.log(count.current);
         }}>Trigger click</button>

         <button className="prevCount"  onClick={(e)=>{
                //console.log(anotherCount.current);
                anotherCount.current=(anotherCount.current+1);
                let prevCount=(anotherCount.current-1);
                console.log(`current : ${anotherCount.current} previous : ${prevCount} `);
         }}>Get Previous Count</button>
        </>
    )
}

export default InputFocus;