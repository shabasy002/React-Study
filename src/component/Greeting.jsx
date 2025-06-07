import { useState } from "react";

function Greetings(){
    const [greet, setGreet]=useState("");
    let hour=new Date().getHours()

    return (
        <>
    <h1>{hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening"}</h1>
        </>
      
    )
}

export default Greetings;