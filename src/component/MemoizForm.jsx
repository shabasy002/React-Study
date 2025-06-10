import { useState, useMemo } from "react";

function MemoizForm(){
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [age, setAge]=useState("");

//  // ✅ useMemo to validate form inputs only when dependencies change
//   const errors = useMemo(() => {
//     const errorObj = {};

//     if (!name.trim()) {
//       errorObj.name = "Name is required";
//     }

//     if (!email.trim()) {
//       errorObj.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(email)) {
//       errorObj.email = "Invalid email format";
//     }

//     if (!age.trim()) {
//       errorObj.age = "Age is required";
//     } else if (isNaN(age) || age <= 0) {
//       errorObj.age = "Enter a valid age";
//     }

//     return errorObj;
//   }, [name, email, age]);

  function errors(){
    const errorObj = {};

    if (!name.trim()) {
      errorObj.name = "Name is required";
    }

    if (!email.trim()) {
      errorObj.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorObj.email = "Invalid email format";
    }

    if (!age.trim()) {
      errorObj.age = "Age is required";
    } else if (isNaN(age) || age <= 0) {
      errorObj.age = "Enter a valid age";
    }

    return errorObj;
  }

  let errorsMemoized=useMemo(errors,  [name, email, age] );

 return(
        <div>
            <form>
                <input value={name} type="text" name="name" placeholder="name" onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                {errorsMemoized.name && <p style={{ color: "red" }}>{errorsMemoized.name}</p>}
                 <input value={email} type="text" name="email" placeholder="email" onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                {errorsMemoized.email && <p style={{ color: "red" }}>{errorsMemoized.email}</p>}
                 <input value={age} type="text" name="age" placeholder="0" onChange={(e)=>{
                    setAge(e.target.value)
                }}/>
                {errorsMemoized.age && <p style={{ color: "red" }}>{errorsMemoized.age}</p>}
                 <button type="button" name="submit" disabled={Object.keys(errorsMemoized).length > 0} >Submit</button>
            </form>
        </div>
    )
}

export default MemoizForm;