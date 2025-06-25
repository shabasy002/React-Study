import React, { useReducer } from "react";
const initialState = 0;

const reducer = function (state, action) {
    switch (action) {
        case "add":
            return state + 1;
        case "subtract":
            if(state>0){
                return state - 1;
            }
        case "reset":
            return 0;
        default:
            throw new Error("Unexpected action");
    }
};

const ReduceCount = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="mainDiv">
            <h2>{count}</h2>
            <div className="btn">
                <button onClick={() => dispatch("add")}>Add</button>
                <button onClick={() => dispatch("subtract")}>Sub</button>
                <button onClick={() => dispatch("reset")}>Reset</button>
            </div>
        </div>
    );
};

export default ReduceCount;