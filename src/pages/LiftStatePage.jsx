import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import ParentWizard from "../component/FormWizard";
import ParentComponent from "../component/LifingState"; 
import QuizParent from "../component/QuizList";
function LiftStatePage(){
    return (
        <>
         <ParentWizard />
         <QuizParent />
         {/* <ParentComponent /> */}
        </>
       
    )
}


export default LiftStatePage;