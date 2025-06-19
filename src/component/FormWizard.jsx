import { useState, useEffect, useRef } from "react";

import React from "react";

function ParentWizard(){
    const [name, setName]=useState("");
    const [address, setAddress] = useState("");

    return(
        <div>
            <NameStep name={name} setName={setName}/>
            {name&& 
                <AddressStep address={address} setAddress={setAddress}/>
            }
                 
           
           
            <div>
                <h3>Summary:</h3>
                <p><strong>Name:</strong> {name}</p>
                 {name&& 
                   <p><strong>Address:</strong> {address}</p>
                 }
            </div>
        </div>
    )
}

function NameStep(props){
     //console.log(props)
    return (
        <div>
           <input type="text" value={props.name} onChange={(e)=>{
             props.setName(e.target.value);
           }} />
        </div>
    )
}

function AddressStep(props){
    return (
        <div>
             <textarea value={props.address} 
             onChange={(e)=>{
             props.setAddress(e.target.value);
           }}></textarea>
        </div>
    )
}

export default ParentWizard;
