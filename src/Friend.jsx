import { useEffect, useState } from 'react'
import './Friends.css'
import Bondhu from './Bondhu';
export default function Friend(){
const[friends, setFriends]= useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriends(data))
},[])


return(
    <div className="box">
        <h1>hello friend : {friends.length}</h1>
        {
         friends.map(friend=> <Bondhu bondhu={friend}></Bondhu>)   
        }
    </div>

)

}