import { useState } from "react"

export default function Team (){
    const[team,setTeam]=useState(11)
    const newAdd = ()=>{
        const addPlayer = team + 1;
        setTeam(addPlayer);

    }
    const newReduce = ()=>{
        const reducePlayer = team - 1;
        setTeam(reducePlayer);

    }
    const multiply = ()=>{
        setTeam(team * 5);
    }
    const divided = ()=>{
        setTeam(team / 5);
    }

    const teamStyle ={
        border:'2px solid red',
        margin :'15px',
        padding :' 15px',
        borderRadius :'15px'
    }
return(
    <div style={teamStyle}>
        <h1>Players : {team}</h1>
        <button onClick={newAdd}>Add player</button>
        <button onClick={newReduce}>Reduce player</button>
        <button onClick={multiply}>Multiply player</button>
        <button onClick={divided}>Divided player</button>
    </div>
)

}