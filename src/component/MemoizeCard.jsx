import { useState, useEffect, useMemo } from "react";

function MemoizCard(props){
    const [title, setTitle]=useState("");
    const [content, setContnet]=useState("");
   function findProps(){
        const newProp={}
        setTitle(props.title);
        setContnet(props.content);
        newProp.title=title;
        newProp.content=content;

        return newProp;
   }
const memoizedProp = useMemo(() => {
    return {
      title: props.title,
      content: props.content
    };
  }, [props.title, props.content]);

    return(
        <div className="card">
            <h3>{memoizedProp.title}</h3>
            <p>{ memoizedProp.content}</p>
        </div>
    )
}


export default MemoizCard;