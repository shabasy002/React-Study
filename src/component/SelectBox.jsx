import { useState } from "react"


function SelectBox(){
    const [selected, onSelect]=useState("");
    return(
        <div className="select-wrap" >
            <select value={selected} onChange={function(e){
            onSelect(e.target.value);
            
        }}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
            </select>
            <h1>Selected Value is  {selected}</h1>
        </div>

        
    )
}

export default SelectBox;