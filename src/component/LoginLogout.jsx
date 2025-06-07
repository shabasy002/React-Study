import { useState, useEffect } from "react";

function LoginLogoutSession(){
    const[log, setLog]=useState(sessionStorage.getItem("log") || "logout");

    useEffect(()=>{
        sessionStorage.setItem("log", log);
      if(log==="login"){
        setTimeout(()=>{
            setLog("logout");
            document.getElementById("logout-message").classList.remove("hide");
        }, 10000)
      }else{
         //document.getElementById("logout-message").classList.add("hide");
      }
      
    },[log]);
    return(
        <div>
            <p id="logout-message" className="hide">Logging out because youn were idle!</p>
        { log ==="logout" ? 
            (<><button name="login" className="login"
            onClick={(e)=>{
                setLog("login");
            }}
            >Login</button><p>Click to Login!</p></>):
            (<><button name="logout" className="logout" 
              onClick={(e)=>{
                setLog("logout");
            }}>Logout</button>
            <p>Click to Logout!</p></>)

        }
        </div>
      
        
    )
}

export default LoginLogoutSession;