import { useEffect, useState } from "react";

function ThemeSwitch(){
    const [theme, setTheme]=useState(() => localStorage.getItem("theme") || "normal");
   
    useEffect(()=>{
       
        document.getElementById("root").setAttribute("class", theme);
        localStorage.setItem("theme", theme);
    },[theme]);
    return(
        <button name="switch" className="switch" onClick={(e)=>{
           {theme === "normal" ? setTheme("red") : setTheme("normal")}
        }}>Toggle Theme</button>
    )
   
}

export default ThemeSwitch;