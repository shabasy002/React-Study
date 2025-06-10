import { useMemo, useState } from "react";

function MemoizeCapital(){
    const Name=['alice', 'bob', 'charlie'];
   const Capitalized = useMemo(() => {
    return Name.map((n) => n[0].toUpperCase() + n.slice(1));
  }, [Name]);
   
    
    console.log(Capitalized);
    return(<ul>
       {Capitalized.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>)
}

export default MemoizeCapital;