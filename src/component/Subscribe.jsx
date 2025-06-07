import { useState } from "react";

function Subscribe(){
    const [sub, setSub]=useState(false);
    
    return(
        <div className="subWrap">
            {sub ?  
           (
            <><button className="subscribe" onClick={(e)=>setSub(false)}>Un Subscribe</button><p>Thank you for subscribing!</p></> 
           ) : 
            (<button className="subscribe" onClick={(e)=>setSub(true)}>Subscribe</button>)
            }
           
           
        </div>
    )
}

export default Subscribe;