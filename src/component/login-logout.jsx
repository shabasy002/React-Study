import React, { useState } from "react";


function LoginLogout() {
    const [session, setSession]=useState("login");
   
    return(
        <div className="session">
            {session==="logout" &&
           
              <button className="login" name="login" onClick={function(e){
                setSession("login");
            }}>Login</button>
            
           
          
        }
         {session==="login" &&
          <>
            <button className="logout" name="logout" onClick={function(e){
                setSession("logout");
            }}>Logout</button>
            <p>Hey you are logged in </p>
            </>
        }
        </div>
    )
}

export default LoginLogout;