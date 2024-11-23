import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(50)

    const handleAdd = ()=>{
        const newCount = count + 1000 ;      
        setCount(newCount);
    }
    const handleAdd2 = ()=>{
        const newCount = count - 1000 ;      
        setCount(newCount);

    }
    return(
        <div style={{border: "2px solid yellow"}}>
            <h2>counter : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleAdd2}>reduce</button>
        </div>
    )
}