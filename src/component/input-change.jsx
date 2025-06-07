import { useState } from 'react';

function InputChanger(){
     const [text, changeText]=useState("");
     let TextCount=(text.length);
 return(<div className='text-wrap'>
        <input type='text' className='text' id="text"  value={text} onChange={function(e){
            changeText((e.target.value))
        }}/>
           <a
          href="#"
          className="clear"
          onClick={(e) => {
             e.preventDefault();
            changeText("")
           
          }}
        >
          clear
        </a>
        {
            (TextCount)>100?(<p>{TextCount} exceeds the limit</p>):<p>{TextCount}</p>
        }
        
      </div>)     
}

export default InputChanger;