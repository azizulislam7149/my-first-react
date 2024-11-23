export default function Bondhu({bondhu}){
const{id, name, email}= bondhu

return(
    <div className="box">
        <h1>id: {id}</h1>
        <h3>name: {name}</h3>
        <p>email: {email}</p>
    </div>
)

} 