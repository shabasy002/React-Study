import { useState } from "react";
import React from "react";

function useStep({ initial = 1, min = 1, max = 5 }){
    const [step, setStep]=useState(initial);
    // let Lastflag=false;
    // let firstflag=false;
    // if(step===last){
    //     Lastflag=true;
    // }
    // if(step===initial){
    //     firstflag=true;
    // }
    function next(){
       setStep((prev) => (prev < max ? prev + 1 : prev));
       
    }
    function prev() {
    setStep((prev) => (prev > min ? prev - 1 : prev));
  }
   
      function reset(){
        return setStep (initial);
    }

    return {
    step,
    next,
    prev,
    reset,
    isFirst: step === min,
    isLast: step === max,
  };
}

export default useStep;