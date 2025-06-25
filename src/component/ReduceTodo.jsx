import { useReducer, useState } from "react";

const initialState = [];
function reducer(state, action){
    switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    default:
        throw new Error();
    }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
 // console.log(state);
    return(
        <>
            <form>
                <input type="text" value={text} onChange={(e)=>{
                    setText(e.target.value);
                }} />
                <button onClick={e => {
                    e.preventDefault();
                    dispatch({ type: 'add', text });
                    setText('');
                }}>Add</button>
            </form>
            <ul>
                {state.map((s)=>{
                   
                  return  <li key={s.id}>asas</li>
            })}
            </ul>
            
        </>
    );
}

export default TodoList;