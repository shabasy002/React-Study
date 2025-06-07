import { useState, useEffect } from "react";

function RoleBased(){
   const [role, setRole]=useState("");
   
  
   useEffect(() => {
    const randomNumber = Math.random();
    setRole(randomNumber > 0.2 ? "admin" : "user");
  }, []); // run only once on mount
   
   return(
    <div>
          {role === "admin" ? (<p>"Manage Users", "Settings"</p>):(<p>"View Profile", "Logout"</p>)}
    </div>
  
    
   )
}

export default RoleBased;