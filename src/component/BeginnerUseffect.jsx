import { useState, useEffect, useRef } from "react";

function BeginnerUseffect(){
    const [type, changeType]=useState("");
    const oldTitle = useRef(document.title); // store initial title once
    const [time, setTime] = useState(new Date());
   
   
    useEffect(()=>{
       const timer = setInterval(() => {
      setTime(new Date()); // update full time every second
    }, 1000);
        return () => clearInterval(timer); // 🧹 cleanup on unmount
    }, [])
    
    useEffect(()=>{
       
        if(type!==""){
            document.title=type;
        }else{
             document.title=oldTitle.current;
        }
        sessionStorage.setItem('typedText', type);
        return(function(){
            sessionStorage.removeItem(type);
        })

    }, [type])
   
    return (
    <div className="useffect">
        <h1>Useffect</h1>
          <h1>🕒 Live Clock with useEffect</h1>
      <h2>
        {time.getHours().toString().padStart(2, '0')}:
        {time.getMinutes().toString().padStart(2, '0')}:
        {time.getSeconds().toString().padStart(2, '0')}
      </h2>
        <label>Type</label>
        <input type="text" className="text"  onChange={(e)=>{
            //console.log(e.target.value);
            changeType(e.target.value);
        }} />
    </div>
    
    )
}

export default BeginnerUseffect;