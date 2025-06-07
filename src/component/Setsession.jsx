import { useEffect, useState } from "react";

function Setsession(){
    const [name, setName]=useState(localStorage.getItem("name") || "");
    const [age, setAge]=useState(localStorage.getItem("age") || "");

    useEffect(()=>{
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
    },[name, age])
    return(<div className="session-wrap">
        <label>Name</label><input type="text" id="name" value={name} 
        onChange={(e)=>setName(e.target.value)}  />
        <label>Age</label><input type="text" id="age" value={age}  onChange={(e)=>setAge(e.target.value)} />
    </div>)
}

export default Setsession;