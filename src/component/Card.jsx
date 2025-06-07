import { useState, useEffect } from "react";

function Card(props){

    useEffect(()=>{
        console.log(`Title prop changed to: ${props.title}`)
    },[props.title])
    return(
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <a href="javascript:;">Read more</a>
        </div>
    )
}

export default Card;