import React from "react";
import { useState, useEffect, useRef } from "react";

function QuizParent(){
    const [answer1, setAnswer1]=useState("");
    const [answer2, setAnswer2]=useState("");
    const [first, setFirst]=useState(false);
    return (
         <div className="quiz-container">
            {!first && 
                <Quiz1 answer1={answer1} setAnswer1={setAnswer1}  />
            }
            
            {answer1!=="" ? (<button className="next-btn" onClick={(e)=>{
                setFirst(true);
            }}>Next</button>):( <button className="next-btn" disabled>Next</button>)}

            {first ? (<Quiz2 answer1={answer2} setAnswer2={setAnswer2} setFirst={setFirst}/> ): ""}
        </div>
    )
}

function Quiz1(props){
  
    return(
        <div className="">
  <h2 className="question">What is the capital of France?</h2>
  <div className="options">
    <label><input type="radio" name="answer" value="A" onClick={(e)=>{
        props.setAnswer1(e.target.value);
    }}/> A. Berlin</label>
    <label><input type="radio" name="answer" value="B"  onClick={(e)=>{
         props.setAnswer1(e.target.value);
    }}/> B. Madrid</label>
    <label><input type="radio" name="answer" value="C"  onClick={(e)=>{
         props.setAnswer1(e.target.value);
    }}/> C. Paris</label>
    <label><input type="radio" name="answer" value="D" onClick={(e)=>{
         props.setAnswer1(e.target.value);
    }}/> D. Rome</label>
  </div>
</div>
    )
}

function Quiz2(props){
     useEffect(()=>{
        props.setFirst(true);
     },[])
    return(
        <div className="">
  <h2 className="question">What is the capital of Germany?</h2>
  <div className="options">
    <label><input type="radio" name="answer" value="A" onClick={(e)=>{
        props.setAnswer2(e.target.value);
    }}/> A. Berlin</label>
    <label><input type="radio" name="answer" value="B"  onClick={(e)=>{
         props.setAnswer2(e.target.value);
    }}/> B. Madrid</label>
    <label><input type="radio" name="answer" value="C"  onClick={(e)=>{
         props.setAnswer2(e.target.value);
    }}/> C. Paris</label>
    <label><input type="radio" name="answer" value="D" onClick={(e)=>{
         props.setAnswer2(e.target.value);
    }}/> D. Rome</label>
  </div>
</div>
    )
}
export default QuizParent;